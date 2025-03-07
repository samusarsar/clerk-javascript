import type { DeletedObjectResource } from '@clerk/types';
import { describe, it } from '@jest/globals';
import React from 'react';

import { render, screen } from '../../../../testUtils';
import { bindCreateFixtures } from '../../../utils/test/createFixtures';
import { MfaSection } from '../MfaSection';

const { createFixtures } = bindCreateFixtures('UserProfile');

const initConfig = createFixtures.config(f => {
  f.withUser({ email_addresses: ['test@clerk.com'] });
});

//TODO-RETHEME
describe.skip('RemoveMfaTOTPPAge', () => {
  it('renders the component', async () => {
    const { wrapper } = await createFixtures(initConfig);

    render(<MfaSection />, { wrapper });
  });

  it('shows the title', async () => {
    const { wrapper } = await createFixtures(initConfig);

    render(<MfaSection />, { wrapper });

    screen.getByRole('heading', { name: /remove two-step verification/i });
    screen.getByText(/authenticator/i);
  });

  describe('Form buttons', () => {
    it('navigates to the root page when pressing cancel', async () => {
      const { wrapper, fixtures } = await createFixtures(initConfig);

      const { userEvent } = render(<MfaSection />, { wrapper });

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }));
      expect(fixtures.router.navigate).toHaveBeenCalledWith('/');
    });

    it('calls the appropriate function when pressing continue', async () => {
      const { wrapper, fixtures } = await createFixtures(initConfig);

      fixtures.clerk.user?.disableTOTP.mockResolvedValueOnce({} as DeletedObjectResource);
      const { userEvent } = render(<MfaSection />, { wrapper });

      await userEvent.click(screen.getByRole('button', { name: /continue/i }));
      expect(fixtures.clerk.user?.disableTOTP).toHaveBeenCalled();
    });
  });
});
