import { useUser } from '@clerk/shared/react';

import { localizationKeys, Text } from '../../customizables';
import { ProfileSection } from '../../elements';
import { Action } from '../../elements/Action';
import { useActionContext } from '../../elements/Action/ActionRoot';
import { Pencil, Plus } from '../../icons';
import { PasswordForm } from './PasswordForm';

const PasswordScreen = () => {
  const { close } = useActionContext();
  return (
    <PasswordForm
      onSuccess={close}
      onReset={close}
    />
  );
};

export const PasswordSection = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const { passwordEnabled } = user;

  return (
    <ProfileSection.Root
      title={localizationKeys('userProfile.start.passwordSection.title')}
      id='password'
    >
      <Action.Root>
        <Action.Closed value='edit'>
          <ProfileSection.ItemList id='password'>
            {passwordEnabled && <Text sx={t => ({ padding: `${t.space.$2} ${t.space.$4}` })}>••••••••••</Text>}

            <Action.Trigger value='edit'>
              <ProfileSection.Button
                id='password'
                leftIcon={passwordEnabled ? Pencil : Plus}
                localizationKey={
                  passwordEnabled
                    ? localizationKeys('userProfile.start.passwordSection.primaryButton__changePassword')
                    : localizationKeys('userProfile.start.passwordSection.primaryButton__setPassword')
                }
              />
            </Action.Trigger>
          </ProfileSection.ItemList>
        </Action.Closed>

        <Action.Open value='edit'>
          <Action.Card>
            <PasswordScreen />
          </Action.Card>
        </Action.Open>
      </Action.Root>
    </ProfileSection.Root>
  );
};
