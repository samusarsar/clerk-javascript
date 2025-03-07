import { useOrganization } from '@clerk/shared/react';

import { Protect, useProtect } from '../../common';
import { useEnvironment } from '../../contexts';
import { Button, Col, descriptors, localizationKeys } from '../../customizables';
import { Header, OrganizationPreview, ProfileSection } from '../../elements';
import { Action } from '../../elements/Action';
import { useActionContext } from '../../elements/Action/ActionRoot';
import { DeleteOrganizationForm, LeaveOrganizationForm } from './ActionConfirmationPage';
import { AddDomainForm } from './AddDomainForm';
import { DomainList } from './DomainList';
import { ProfileForm } from './ProfileForm';

const ProfileScreen = () => {
  const { close } = useActionContext();
  return (
    <ProfileForm
      onSuccess={close}
      onReset={close}
    />
  );
};

const AddDomainScreen = () => {
  const { close } = useActionContext();
  return (
    <AddDomainForm
      onSuccess={close}
      onReset={close}
    />
  );
};

const LeaveOrganizationScreen = () => {
  const { close } = useActionContext();
  return (
    <LeaveOrganizationForm
      onSuccess={close}
      onReset={close}
    />
  );
};

const DeleteOrganizationScreen = () => {
  const { close } = useActionContext();
  return (
    <DeleteOrganizationForm
      onSuccess={close}
      onReset={close}
    />
  );
};

export const OrganizationGeneralPage = () => {
  return (
    <Col
      elementDescriptor={descriptors.page}
      sx={t => ({ gap: t.space.$8 })}
    >
      <Col
        elementDescriptor={descriptors.profilePage}
        elementId={descriptors.profilePage.setId('organizationGeneral')}
      >
        <Header.Root>
          <Header.Title
            localizationKey={localizationKeys('organizationProfile.start.headerTitle__general')}
            sx={t => ({ marginBottom: t.space.$4 })}
            textVariant='h2'
          />
        </Header.Root>
        <OrganizationProfileSection />
        <Protect permission='org:sys_domains:read'>
          <OrganizationDomainsSection />
        </Protect>
        <OrganizationDangerSection />
      </Col>
    </Col>
  );
};

const OrganizationProfileSection = () => {
  const { organization } = useOrganization();

  if (!organization) {
    return null;
  }

  const profile = <OrganizationPreview organization={organization} />;

  return (
    <ProfileSection.Root
      title={localizationKeys('organizationProfile.start.profileSection.title')}
      id='organizationProfile'
    >
      <Action.Root>
        <Protect
          permission={'org:sys_profile:manage'}
          fallback={profile}
        >
          <Action.Closed value='edit'>
            <ProfileSection.Item id='organizationProfile'>
              {profile}

              <Action.Trigger value='edit'>
                <Button
                  id='organizationProfile'
                  variant='ghost'
                  localizationKey={localizationKeys('organizationProfile.start.profileSection.primaryButton')}
                />
              </Action.Trigger>
            </ProfileSection.Item>
          </Action.Closed>
        </Protect>

        <Action.Open value='edit'>
          <Action.Card>
            <ProfileScreen />
          </Action.Card>
        </Action.Open>
      </Action.Root>
    </ProfileSection.Root>
  );
};

const OrganizationDomainsSection = () => {
  const { organizationSettings } = useEnvironment();
  const { organization } = useOrganization();

  if (!organizationSettings || !organization) {
    return null;
  }

  if (!organizationSettings.domains.enabled) {
    return null;
  }

  return (
    <ProfileSection.Root
      title={localizationKeys('organizationProfile.profilePage.domainSection.title')}
      subtitle={localizationKeys('organizationProfile.profilePage.domainSection.subtitle')}
      id='organizationDomains'
    >
      <Action.Root>
        <DomainList />

        <Protect permission='org:sys_domains:manage'>
          <Action.Trigger value='add'>
            <ProfileSection.Button
              localizationKey={localizationKeys('organizationProfile.profilePage.domainSection.primaryButton')}
              id='organizationDomains'
            />
          </Action.Trigger>

          <Action.Open value='add'>
            <Action.Card>
              <AddDomainScreen />
            </Action.Card>
          </Action.Open>
        </Protect>
      </Action.Root>
    </ProfileSection.Root>
  );
};

const OrganizationDangerSection = () => {
  const { organization } = useOrganization();
  const canDeleteOrganization = useProtect({ permission: 'org:sys_profile:delete' });

  if (!organization) {
    return null;
  }

  const adminDeleteEnabled = organization.adminDeleteEnabled;

  return (
    <ProfileSection.Root
      id='organizationDanger'
      title={localizationKeys('organizationProfile.profilePage.dangerSection.title')}
      sx={t => ({ marginBottom: t.space.$4 })}
    >
      <Action.Root>
        <Action.Closed value={['leave', 'delete']}>
          <ProfileSection.ItemList
            sx={{ flexDirection: 'row' }}
            id='organizationDanger'
          >
            <ProfileSection.Item id='organizationDanger'>
              <Action.Trigger value='leave'>
                <Button
                  variant='ghostDanger'
                  localizationKey={localizationKeys(
                    'organizationProfile.profilePage.dangerSection.leaveOrganization.title',
                  )}
                />
              </Action.Trigger>
            </ProfileSection.Item>

            {canDeleteOrganization && adminDeleteEnabled && (
              <ProfileSection.Item id={'organizationDanger'}>
                <Action.Trigger value='delete'>
                  <Button
                    variant='ghostDanger'
                    localizationKey={localizationKeys(
                      'organizationProfile.profilePage.dangerSection.deleteOrganization.title',
                    )}
                  />
                </Action.Trigger>
              </ProfileSection.Item>
            )}
          </ProfileSection.ItemList>
        </Action.Closed>

        <Action.Open value='leave'>
          <Action.Card variant='destructive'>
            <LeaveOrganizationScreen />
          </Action.Card>
        </Action.Open>

        <Action.Open value='delete'>
          <Action.Card variant='destructive'>
            <DeleteOrganizationScreen />
          </Action.Card>
        </Action.Open>
      </Action.Root>
    </ProfileSection.Root>
  );
};
