import type { ImageResource } from '@clerk/types';
import { describe, it } from '@jest/globals';

import { render, screen, waitFor } from '../../../../testUtils';
import { bindCreateFixtures } from '../../../utils/test/createFixtures';
import { UserProfileSection } from '../UserProfileSection';

const { createFixtures } = bindCreateFixtures('UserProfileSection');

describe('ProfileSection', () => {
  it('renders the component', async () => {
    const { wrapper } = await createFixtures(f => {
      f.withUser({ email_addresses: ['test@clerk.com'] });
    });
    render(<UserProfileSection />, { wrapper });
  });

  it('shows the title', async () => {
    const { wrapper } = await createFixtures(f => {
      f.withUser({ email_addresses: ['test@clerk.com'] });
    });
    const { userEvent } = render(<UserProfileSection />, { wrapper });

    await userEvent.click(screen.getByText(/edit profile/i));
    await waitFor(() => {
      screen.getByText(/update profile/i);
    });

    screen.getByRole('heading', { name: /Update Profile/i });
  });

  describe('First and last name', () => {
    it('first and last name inputs exists if name is enabled', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
          first_name: 'F',
          last_name: 'L',
        });
      });
      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      const firstNameInput: HTMLInputElement = screen.getByLabelText(/first name/i);
      const lastNameInput: HTMLInputElement = screen.getByLabelText(/last name/i);
      expect(firstNameInput.value).toBe('F');
      expect(lastNameInput.value).toBe('L');
    });
  });

  describe('with SAML', () => {
    it('disables the first & last name inputs if user has active enterprise connections', async () => {
      const emailAddress = 'george@jungle.com';
      const firstName = 'George';
      const lastName = 'Clerk';

      const config = createFixtures.config(f => {
        f.withEmailAddress();
        f.withSaml();
        f.withName();
        f.withUser({
          first_name: firstName,
          last_name: lastName,
          email_addresses: [emailAddress],
          saml_accounts: [
            {
              id: 'samlacc_foo',
              provider: 'saml_okta',
              active: true,
              email_address: emailAddress,
            },
          ],
        });
      });

      const { wrapper } = await createFixtures(config);

      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      expect(screen.getByRole('textbox', { name: 'First name' })).toBeDisabled();
      expect(screen.getByRole('textbox', { name: 'Last name' })).toBeDisabled();

      screen.getByText('Your profile information has been provided by the enterprise connection and cannot be edited.');
    });

    it('does not disable the first & last name inputs if user has no active enterprise connections', async () => {
      const emailAddress = 'george@jungle.com';
      const firstName = 'George';
      const lastName = 'Clerk';

      const config = createFixtures.config(f => {
        f.withEmailAddress();
        f.withSaml();
        f.withName();
        f.withUser({
          first_name: firstName,
          last_name: lastName,
          email_addresses: [emailAddress],
          saml_accounts: [
            {
              id: 'samlacc_foo',
              provider: 'saml_okta',
              active: false,
              email_address: emailAddress,
            },
          ],
        });
      });

      const { wrapper } = await createFixtures(config);

      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      expect(screen.getByRole('textbox', { name: 'First name' })).not.toBeDisabled();
      expect(screen.getByRole('textbox', { name: 'Last name' })).not.toBeDisabled();

      expect(
        screen.queryByText(
          'Your profile information has been provided by the enterprise connection and cannot be edited.',
        ),
      ).not.toBeInTheDocument();
    });
  });

  describe('Profile image', () => {
    it('shows the image', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withUser({
          email_addresses: ['test@clerk.com'],
          image_url: 'https://clerk.com',
          first_name: 'F',
          last_name: 'L',
        });
      });
      render(<UserProfileSection />, { wrapper });

      screen.getByRole('img', { name: 'F L' });
    });

    it('clicking "Upload image" opens the "Upload" section', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withUser({
          email_addresses: ['test@clerk.com'],
        });
      });
      const { userEvent, getByText, queryByText, findByRole } = render(<UserProfileSection />, { wrapper });
      await userEvent.click(getByText(/edit profile/i));
      expect(await findByRole('heading', { name: /update profile/i })).toBeInTheDocument();

      expect(queryByText(/select file/i)).toBeNull();
      await userEvent.click(getByText(/upload$/i));
      getByText(/select file/i);
    });

    it('clicking "Remove image" calls the appropriate function', async () => {
      const { wrapper, fixtures } = await createFixtures(f => {
        f.withUser({
          email_addresses: ['test@clerk.com'],
          image_url:
            'https://img.clerkstage.dev/70726f78792f68747470733a2f2f696d616765732e6c636c636c65726b2e636f6d2f75706c6f616465642f696d675f324f4559646f346e575263766579536c6a366b7775757a336e79472e6a706567',
        });
      });
      fixtures.clerk.user?.setProfileImage.mockReturnValueOnce(Promise.resolve({} as ImageResource));
      const { userEvent, getByText, findByRole } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(getByText(/edit profile/i));
      expect(await findByRole('heading', { name: /update profile/i })).toBeInTheDocument();

      await userEvent.click(getByText(/remove$/i));
      expect(fixtures.clerk.user?.setProfileImage).toHaveBeenCalledWith({ file: null });
    });

    it('"Remove image" is not shown when a default image exists', async () => {
      const { wrapper, fixtures } = await createFixtures(f => {
        f.withUser({
          email_addresses: ['test@clerk.com'],
          image_url:
            'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUDNBd2hvMFhUSEtLRjJra3dyaUZXaTFlT0wiLCJyaWQiOiJ1c2VyXzJYQmZkNXZLRG9CbWV3QUtXNDh2NUhIdXNvWCIsImluaXRpYWxzIjoiR0QifQ?width=160',
        });
      });
      fixtures.clerk.user?.setProfileImage.mockReturnValueOnce(Promise.resolve({} as ImageResource));
      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      expect(screen.queryByText(/remove image/i)).not.toBeInTheDocument();
    });
  });

  describe('Form Buttons', () => {
    it('form buttons appear as expected', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
        });
      });
      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      screen.getByRole('button', { name: /cancel$/i });
      screen.getByRole('button', { name: /save$/i });
    });

    it('pressing cancel shows previous content', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
        });
      });
      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }));
      await waitFor(() => {
        screen.getByText(/edit profile/i);
      });
    });

    it('continue button is disabled by default', async () => {
      const { wrapper } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
        });
      });
      const { userEvent } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(screen.getByText(/edit profile/i));
      await waitFor(() => {
        screen.getByText(/update profile/i);
      });

      expect(screen.getByText(/save/i, { exact: false }).closest('button')).toHaveAttribute('disabled');
    });

    it("continue button is enabled after changing an input field's value", async () => {
      const { wrapper } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
        });
      });
      const { userEvent, getByText } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(getByText(/edit profile/i));
      await waitFor(() => getByText(/update profile/i));

      expect(getByText(/save$/i, { exact: false }).closest('button')).toHaveAttribute('disabled');
      await userEvent.type(screen.getByText(/First name/i), 'George');
      expect(getByText(/save$/i, { exact: false }).closest('button')).not.toHaveAttribute('disabled');
    });

    it('calls the appropriate function if continue is pressed', async () => {
      const { wrapper, fixtures } = await createFixtures(f => {
        f.withName();
        f.withUser({
          email_addresses: ['test@clerk.com'],
          first_name: 'F',
          last_name: 'L',
        });
      });
      fixtures.clerk.user?.update.mockReturnValueOnce(Promise.resolve({} as any));
      const { userEvent, getByText, getByLabelText } = render(<UserProfileSection />, { wrapper });

      await userEvent.click(getByText(/edit profile/i));
      await waitFor(() => getByText(/update profile/i));

      await userEvent.type(getByLabelText(/first name/i), 'George');
      await userEvent.type(getByLabelText(/last name/i), 'Clerk');
      await userEvent.click(getByText(/save$/i));
      expect(fixtures.clerk.user?.update).toHaveBeenCalledWith({ firstName: 'FGeorge', lastName: 'LClerk' });
    });
  });
});
