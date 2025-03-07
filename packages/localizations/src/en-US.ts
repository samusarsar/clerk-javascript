import type { LocalizationResource } from '@clerk/types';

export const enUS: LocalizationResource = {
  locale: 'en-US',
  socialButtonsBlockButton: 'Continue with {{provider|titleize}}',
  dividerText: 'or',
  formFieldLabel__emailAddress: 'Email address',
  formFieldLabel__emailAddresses: 'Email addresses',
  formFieldLabel__phoneNumber: 'Phone number',
  formFieldLabel__username: 'Username',
  formFieldLabel__emailAddress_username: 'Email address or username',
  formFieldLabel__password: 'Password',
  formFieldLabel__currentPassword: 'Current password',
  formFieldLabel__newPassword: 'New password',
  formFieldLabel__confirmPassword: 'Confirm password',
  formFieldLabel__signOutOfOtherSessions: 'Sign out of all other devices',
  formFieldLabel__automaticInvitations: 'Enable automatic invitations for this domain',
  formFieldLabel__firstName: 'First name',
  formFieldLabel__lastName: 'Last name',
  formFieldLabel__backupCode: 'Backup code',
  formFieldLabel__organizationName: 'Name',
  formFieldLabel__organizationSlug: 'Slug',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__role: 'Role',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses: 'example@email.com, example2@email.com',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Delete account',
  formFieldError__notMatchingPasswords: `Passwords don't match.`,
  formFieldError__matchingPasswords: 'Passwords match.',
  formFieldError__verificationLinkExpired: 'The verification link expired. Please request a new link.',
  formFieldAction__forgotPassword: 'Forgot password?',
  formFieldHintText__optional: 'Optional',
  formFieldHintText__slug: 'A slug is a human-readable ID that must be unique. It’s often used in URLs.',
  formButtonPrimary: 'Continue',
  formButtonPrimary__verify: 'Verify',
  signInEnterPasswordTitle: 'Enter your password',
  backButton: 'Back',
  footerActionLink__useAnotherMethod: 'Use another method',
  badge__primary: 'Primary',
  badge__thisDevice: 'This device',
  badge__userDevice: 'User device',
  badge__otherImpersonatorDevice: 'Other impersonator device',
  badge__default: 'Default',
  badge__unverified: 'Unverified',
  badge__requiresAction: 'Requires action',
  badge__you: 'You',
  footerPageLink__help: 'Help',
  footerPageLink__privacy: 'Privacy',
  footerPageLink__terms: 'Terms',
  paginationButton__previous: 'Previous',
  paginationButton__next: 'Next',
  paginationRowText__displaying: 'Displaying',
  paginationRowText__of: 'of',
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Member',
  membershipRole__guestMember: 'Guest',
  signUp: {
    start: {
      title: 'Create your account',
      subtitle: 'Welcome! Please fill in the details to get started.',
      actionText: 'Already have an account?',
      actionLink: 'Sign in',
    },
    emailLink: {
      title: 'Verify your email',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification link',
      formSubtitle: 'Use the verification link sent to your email address',
      resendButton: "Didn't receive a link? Resend",
      verified: {
        title: 'Successfully signed up',
      },
      loading: {
        title: 'Signing up...',
      },
      verifiedSwitchTab: {
        title: 'Successfully verified email',
        subtitle: 'Return to the newly opened tab to continue',
        subtitleNewTab: 'Return to previous tab to continue',
      },
    },
    emailCode: {
      title: 'Verify your email',
      subtitle: 'Enter the verification code sent to your email',
      formTitle: 'Verification code',
      formSubtitle: 'Enter the verification code sent to your email address',
      resendButton: "Didn't receive a code? Resend",
    },
    phoneCode: {
      title: 'Verify your phone',
      subtitle: 'Enter the verification code sent to your phone',
      formTitle: 'Verification code',
      formSubtitle: 'Enter the verification code sent to your phone number',
      resendButton: "Didn't receive a code? Resend",
    },
    continue: {
      title: 'Fill in missing fields',
      subtitle: 'Please fill in the remaining details to continue.',
      actionText: 'Already have an account?',
      actionLink: 'Sign in',
    },
  },
  signIn: {
    start: {
      title: 'Sign in to {{applicationName}}',
      subtitle: 'Welcome back! Please sign in to continue',
      actionText: 'Don’t have an account?',
      actionLink: 'Sign up',
      actionLink__use_email: 'Use email',
      actionLink__use_phone: 'Use phone',
      actionLink__use_username: 'Use username',
      actionLink__use_email_username: 'Use email or username',
    },
    password: {
      title: 'Enter your password',
      subtitle: 'Enter the password associated with your account',
      actionLink: 'Use another method',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Forgot Password?',
      label__alternativeMethods: 'Or, sign in with another method',
      blockButton__resetPassword: 'Reset your password',
    },
    forgotPassword: {
      title: 'Reset password',
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      formTitle: 'Reset password code',
      resendButton: "Didn't receive a code? Resend",
    },
    resetPassword: {
      title: 'Set new password',
      formButtonPrimary: 'Reset Password',
      successMessage: 'Your password was successfully changed. Signing you in, please wait a moment.',
      requiredMessage:
        'An account already exists with an unverified email address. Please reset your password for security.',
    },
    resetPasswordMfa: {
      detailsLabel: 'We need to verify your identity before resetting your password.',
    },
    emailCode: {
      title: 'Check your email',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
    },
    emailLink: {
      title: 'Check your email',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification link',
      formSubtitle: 'Use the verification link sent to your email',
      resendButton: "Didn't receive a link? Resend",
      unusedTab: {
        title: 'You may close this tab',
      },
      verified: {
        title: 'Successfully signed in',
        subtitle: 'You will be redirected soon',
      },
      verifiedSwitchTab: {
        subtitle: 'Return to original tab to continue',
        titleNewTab: 'Signed in on other tab',
        subtitleNewTab: 'Return to the newly opened tab to continue',
      },
      loading: {
        title: 'Signing in...',
        subtitle: 'You will be redirected soon',
      },
      failed: {
        title: 'This verification link is invalid',
        subtitle: 'Return to the original tab to continue.',
      },
      expired: {
        title: 'This verification link has expired',
        subtitle: 'Return to the original tab to continue.',
      },
    },
    phoneCode: {
      title: 'Check your phone',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
    },
    phoneCodeMfa: {
      title: 'Check your phone',
      subtitle: 'To continue, please enter the verification code sent to your phone',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
    },
    totpMfa: {
      title: 'Two-step verification',
      subtitle: 'To continue, please enter the verification code generated by your authenticator app',
      formTitle: 'Verification code',
    },
    backupCodeMfa: {
      title: 'Enter a backup code',
      subtitle: 'Your backup code is the one you got when setting up two-step authentication.',
    },
    alternativeMethods: {
      title: 'Use another method',
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      actionLink: 'Get help',
      actionText: 'Don’t have any of these?',
      blockButton__emailLink: 'Email link to {{identifier}}',
      blockButton__emailCode: 'Email code to {{identifier}}',
      blockButton__phoneCode: 'Send SMS code to {{identifier}}',
      blockButton__password: 'Sign in with your password',
      blockButton__totp: 'Use your authenticator app',
      blockButton__backupCode: 'Use a backup code',
      getHelp: {
        title: 'Get help',
        content: `If you’re experiencing difficulty signing into your account, email us and we will work with you to restore access as soon as possible.`,
        blockButton__emailSupport: 'Email support',
      },
    },
    noAvailableMethods: {
      title: 'Cannot sign in',
      subtitle: 'An error occurred',
      message: "Cannot proceed with sign in. There's no available authentication factor.",
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Save',
    formButtonPrimary__finish: 'Finish',
    formButtonReset: 'Cancel',
    navbar: {
      title: 'Account',
      description: 'Manage your account info.',
      account: 'Profile',
      security: 'Security',
    },
    start: {
      headerTitle__account: 'Profile',
      headerTitle__security: 'Security',
      profileSection: {
        title: 'Profile',
        primaryButton: 'Edit Profile',
      },
      usernameSection: {
        title: 'Username',
        primaryButton__changeUsername: 'Change username',
        primaryButton__setUsername: 'Set username',
      },
      emailAddressesSection: {
        title: 'Email addresses',
        primaryButton: 'Add an email address',
        detailsAction__primary: 'Complete verification',
        detailsAction__nonPrimary: 'Set as primary',
        detailsAction__unverified: 'Verify',
        destructiveAction: 'Remove email',
      },
      phoneNumbersSection: {
        title: 'Phone numbers',
        primaryButton: 'Add a phone number',
        detailsAction__primary: 'Complete verification',
        detailsAction__nonPrimary: 'Set as primary',
        detailsAction__unverified: 'Verify phone number',
        destructiveAction: 'Remove phone number',
      },
      connectedAccountsSection: {
        title: 'Connected accounts',
        primaryButton: 'Connect account',
        actionLabel__connectionFailed: 'Try again',
        actionLabel__reauthorize: 'Authorize now',
        destructiveActionTitle: 'Remove',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      passwordSection: {
        title: 'Password',
        primaryButton__changePassword: 'Change password',
        primaryButton__setPassword: 'Set password',
      },
      mfaSection: {
        title: 'Two-step verification',
        primaryButton: 'Add two-step verification',
        phoneCode: {
          destructiveActionLabel: 'Remove',
          actionLabel__setDefault: 'Set as default',
        },
        backupCodes: {
          headerTitle: 'Backup codes',
          title__regenerate: 'Regenerate backup codes',
          subtitle__regenerate:
            'Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.',
          actionLabel__regenerate: 'Regenerate',
        },
        totp: {
          headerTitle: 'Authenticator application',
          destructiveActionTitle: 'Remove',
        },
      },
      activeDevicesSection: {
        title: 'Active devices',
        destructiveAction: 'Sign out of device',
      },
      web3WalletsSection: {
        title: 'Web3 wallets',
        primaryButton: 'Web3 wallets',
        destructiveAction: 'Remove wallet',
      },
      dangerSection: {
        title: 'Account termination',
        deleteAccountButton: 'Delete Account',
      },
    },
    profilePage: {
      title: 'Update profile',
      imageFormTitle: 'Profile image',
      imageFormSubtitle: 'Upload',
      imageFormDestructiveActionSubtitle: 'Remove',
      fileDropAreaTitle: 'Drag file here, or...',
      fileDropAreaAction: 'Select file',
      fileDropAreaHint: 'Recommended size 1:1, up to 10MB.',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'Your profile has been updated.',
    },
    usernamePage: {
      title: 'Update username',
      successMessage: 'Your username has been updated.',
    },
    emailAddressPage: {
      title: 'Add email address',
      emailCode: {
        formHint: 'An email containing a verification code will be sent to this email address.',
        formTitle: 'Verification code',
        formSubtitle: 'Enter the verification code sent to {{identifier}}',
        resendButton: "Didn't receive a code? Resend",
        successMessage: 'The email {{identifier}} has been added to your account.',
      },
      emailLink: {
        formHint: 'An email containing a verification link will be sent to this email address.',
        formTitle: 'Verification link',
        formSubtitle: 'Click on the verification link in the email sent to {{identifier}}',
        resendButton: "Didn't receive a link? Resend",
        successMessage: 'The email {{identifier}} has been added to your account.',
      },
      removeResource: {
        title: 'Remove email address',
        messageLine1: '{{identifier}} will be removed from this account.',
        messageLine2: 'You will no longer be able to sign in using this email address.',
        successMessage: '{{emailAddress}} has been removed from your account.',
      },
    },
    phoneNumberPage: {
      title: 'Add phone number',
      successMessage: '{{identifier}} has been added to your account.',
      infoText: 'A text message containing a verification link will be sent to this phone number.',
      infoText__secondary: 'Message and data rates may apply.',
      removeResource: {
        title: 'Remove phone number',
        messageLine1: '{{identifier}} will be removed from this account.',
        messageLine2: 'You will no longer be able to sign in using this phone number.',
        successMessage: '{{phoneNumber}} has been removed from your account.',
      },
    },
    connectedAccountPage: {
      title: 'Add connected account',
      formHint: 'Select a provider to connect your account.',
      formHint__noAccounts: 'There are no available external account providers.',
      socialButtonsBlockButton: 'Connect {{provider|titleize}} account',
      successMessage: 'The provider has been added to your account',
      removeResource: {
        title: 'Remove connected account',
        messageLine1: '{{identifier}} will be removed from this account.',
        messageLine2:
          'You will no longer be able to use this connected account and any dependent features will no longer work.',
        successMessage: '{{connectedAccount}} has been removed from your account.',
      },
    },
    web3WalletPage: {
      title: 'Add web3 wallet',
      subtitle__availableWallets: 'Select a web3 wallet to connect to your account.',
      subtitle__unavailableWallets: 'There are no available web3 wallets.',
      successMessage: 'The wallet has been added to your account.',
      removeResource: {
        title: 'Remove web3 wallet',
        messageLine1: '{{identifier}} will be removed from this account.',
        messageLine2: 'You will no longer be able to sign in using this web3 wallet.',
        successMessage: '{{web3Wallet}} has been removed from your account.',
      },
    },
    passwordPage: {
      title: 'Set password',
      changePasswordTitle: 'Change password',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      successMessage: 'Your password has been set.',
      changePasswordSuccessMessage: 'Your password has been updated.',
      sessionsSignedOutSuccessMessage: 'All other devices have been signed out.',
    },
    mfaPage: {
      title: 'Add two-step verification',
      formHint: 'Select a method to add.',
    },
    mfaTOTPPage: {
      title: 'Add authenticator application',
      verifyTitle: 'Verification code',
      verifySubtitle: 'Enter verification code generated by your authenticator',
      successMessage:
        'Two-step verification is now enabled. When signing in, you will need to enter a verification code from this authenticator as an additional step.',
      authenticatorApp: {
        infoText__ableToScan:
          'Set up a new sign-in method in your authenticator app and scan the following QR code to link it to your account.',
        infoText__unableToScan: 'Set up a new sign-in method in your authenticator and enter the Key provided below.',
        inputLabel__unableToScan1:
          'Make sure Time-based or One-time passwords is enabled, then finish linking your account.',
        inputLabel__unableToScan2:
          'Alternatively, if your authenticator supports TOTP URIs, you can also copy the full URI.',
        buttonAbleToScan__nonPrimary: 'Scan QR code instead',
        buttonUnableToScan__nonPrimary: 'Can’t scan QR code?',
      },
      removeResource: {
        title: 'Remove two-step verification',
        messageLine1: 'Verification codes from this authenticator will no longer be required when signing in.',
        messageLine2: 'Your account may not be as secure. Are you sure you want to continue?',
        successMessage: 'Two-step verification via authenticator application has been removed.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Add SMS code verification',
      primaryButton__addPhoneNumber: 'Add a phone number',
      subtitle__availablePhoneNumbers: 'Select a phone number to register for SMS code two-step verification.',
      subtitle__unavailablePhoneNumbers:
        'There are no available phone numbers to register for SMS code two-step verification.',
      successMessage:
        'SMS code two-step verification is now enabled for this phone number. When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      removeResource: {
        title: 'Remove two-step verification',
        messageLine1: '{{identifier}} will be no longer receiving verification codes when signing in.',
        messageLine2: 'Your account may not be as secure. Are you sure you want to continue?',
        successMessage: 'SMS code two-step verification has been removed for {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Add backup code verification',
      title__codelist: 'Backup codes',
      subtitle__codelist: 'Store them securely and keep them secret.',
      infoText1: 'Backup codes will be enabled for this account.',
      infoText2:
        'Keep the backup codes secret and store them securely. You may regenerate backup codes if you suspect they have been compromised.',
      successSubtitle:
        'You can use one of these to sign in to your account, if you lose access to your authentication device.',
      successMessage:
        'Backup codes are now enabled. You can use one of these to sign in to your account, if you lose access to your authentication device. Each code can only be used once.',
      actionLabel__copy: 'Copy all',
      actionLabel__copied: 'Copied!',
      actionLabel__download: 'Download .txt',
      actionLabel__print: 'Print',
    },
    deletePage: {
      title: 'Delete account',
      messageLine1: 'Are you sure you want to delete your account?',
      messageLine2: 'This action is permanent and irreversible.',
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: 'Delete account',
    },
  },
  userButton: {
    action__manageAccount: 'Manage account',
    action__signOut: 'Sign out',
    action__signOutAll: 'Sign out of all accounts',
    action__addAccount: 'Add account',
  },
  organizationSwitcher: {
    personalWorkspace: 'Personal account',
    notSelected: 'No organization selected',
    action__createOrganization: 'Create organization',
    action__manageOrganization: 'Manage',
    action__invitationAccept: 'Join',
    action__suggestionsAccept: 'Request to join',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  impersonationFab: {
    title: 'Signed in as {{identifier}}',
    action__signOut: 'Sign out',
  },
  organizationProfile: {
    navbar: {
      title: 'Organization',
      description: 'Manage your organization.',
      general: 'General',
      members: 'Members',
    },
    badge__unverified: 'Unverified',
    badge__automaticInvitation: 'Automatic invitations',
    badge__automaticSuggestion: 'Automatic suggestions',
    badge__manualInvitation: 'No automatic enrollment',
    start: {
      headerTitle__members: 'Members',
      headerTitle__general: 'General',
      profileSection: {
        title: 'Organization Profile',
        primaryButton: 'Edit profile',
        uploadAction__title: 'Logo',
      },
    },
    profilePage: {
      title: 'Update Profile',
      successMessage: 'The organization has been updated.',
      dangerSection: {
        title: 'Danger',
        leaveOrganization: {
          title: 'Leave organization',
          messageLine1:
            'Are you sure you want to leave this organization? You will lose access to this organization and its applications.',
          messageLine2: 'This action is permanent and irreversible.',
          successMessage: 'You have left the organization.',
          actionDescription: 'Type "{{organizationName}}" below to continue.',
        },
        deleteOrganization: {
          title: 'Delete organization',
          messageLine1: 'Are you sure you want to delete this organization?',
          messageLine2: 'This action is permanent and irreversible.',
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          successMessage: 'You have deleted the organization.',
        },
      },
      domainSection: {
        title: 'Verified domains',
        subtitle:
          'Allow users to join the organization automatically or request to join based on a verified email domain.',
        primaryButton: 'Add domain',
        menuAction__verify: 'Verify',
        menuAction__remove: 'Delete',
        menuAction__manage: 'Manage',
      },
    },
    createDomainPage: {
      title: 'Add domain',
      subtitle:
        'Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.',
    },
    verifyDomainPage: {
      title: 'Verify domain',
      subtitle: 'The domain {{domainName}} needs to be verified via email.',
      subtitleVerificationCodeScreen: 'A verification code was sent to {{emailAddress}}. Enter the code to continue.',
      formTitle: 'Verification code',
      formSubtitle: 'Enter the verification code sent to your email address',
      resendButton: "Didn't receive a code? Resend",
    },
    verifiedDomainPage: {
      title: 'Update {{domain}}',
      subtitle: 'The domain {{domain}} is now verified. Continue by selecting enrollment mode.',
      start: {
        headerTitle__enrollment: 'Enrollment options',
        headerTitle__danger: 'Danger',
      },
      enrollmentTab: {
        subtitle: 'Choose how users from this domain can join the organization.',
        manualInvitationOption__label: 'No automatic enrollment',
        manualInvitationOption__description: 'Users can only be invited manually to the organization.',
        automaticInvitationOption__label: 'Automatic invitations',
        automaticInvitationOption__description:
          'Users are automatically invited to join the organization when they sign-up and can join anytime.',
        automaticSuggestionOption__label: 'Automatic suggestions',
        automaticSuggestionOption__description:
          'Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.',
        formButton__save: 'Save',
        calloutInfoLabel: 'Changing the enrollment mode will only affect new users.',
        calloutInvitationCountLabel: 'Pending invitations sent to users: {{count}}',
        calloutSuggestionCountLabel: 'Pending suggestions sent to users: {{count}}',
      },
      dangerTab: {
        removeDomainTitle: 'Remove domain',
        removeDomainSubtitle: 'Remove this domain from your verified domains',
        removeDomainActionLabel__remove: 'Remove domain',
        calloutInfoLabel: 'Removing this domain will affect invited users.',
      },
    },
    invitePage: {
      title: 'Invite new members',
      subtitle: 'Enter or paste one or more email addresses, separated by spaces or commas.',
      successMessage: 'Invitations successfully sent',
      detailsTitle__inviteFailed:
        'The invitations could not be sent. There are already pending invitations for the following email addresses: {{email_addresses}}.',
      formButtonPrimary__continue: 'Send invitations',
    },
    removeDomainPage: {
      title: 'Remove domain',
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
    },
    membersPage: {
      detailsTitle__emptyRow: 'No members to display',
      action__invite: 'Invite',
      start: {
        headerTitle__members: 'Members',
        headerTitle__invitations: 'Invitations',
        headerTitle__requests: 'Requests',
      },
      activeMembersTab: {
        tableHeader__user: 'User',
        tableHeader__joined: 'Joined',
        tableHeader__role: 'Role',
        tableHeader__actions: '',
        menuAction__remove: 'Remove member',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Invited',
        menuAction__revoke: 'Revoke invitation',
      },
      invitationsTab: {
        table__emptyRow: 'No invitations to display',
        manualInvitations: {
          headerTitle: 'Individual invitations',
          headerSubtitle: 'Manually invite members and manage existing invitations.',
        },
        autoInvitations: {
          headerTitle: 'Automatic invitations',
          headerSubtitle:
            'Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.',
          primaryButton: 'Manage verified domains',
        },
      },
      requestsTab: {
        tableHeader__requested: 'Requested access',
        menuAction__approve: 'Approve',
        menuAction__reject: 'Reject',
        table__emptyRow: 'No requests to display',
        requests: {
          headerTitle: 'Requests',
          headerSubtitle: 'Browse and manage users who requested to join the organization.',
        },
        autoSuggestions: {
          headerTitle: 'Automatic suggestions',
          headerSubtitle:
            'Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.',
          primaryButton: 'Manage verified domains',
        },
      },
    },
  },
  createOrganization: {
    title: 'Create Organization',
    formButtonSubmit: 'Create organization',
    invitePage: {
      formButtonReset: 'Skip',
    },
  },
  organizationList: {
    createOrganization: 'Create Organization',
    title: 'Choose an account',
    titleWithoutPersonal: 'Choose an organization',
    subtitle: 'to continue to {{applicationName}}',
    action__invitationAccept: 'Join',
    invitationAcceptedLabel: 'Joined',
    action__suggestionsAccept: 'Request to join',
    suggestionsAcceptedLabel: 'Pending approval',
    action__createOrganization: 'Create organization',
  },
  unstable__errors: {
    identification_deletion_failed: 'You cannot delete your last identification.',
    phone_number_exists: 'This phone number is taken. Please try another.',
    form_identifier_not_found: '',
    captcha_unavailable:
      'Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.',
    captcha_invalid:
      'Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.',
    form_password_pwned:
      'This password has been found as part of a breach and can not be used, please try another password instead.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_format_invalid__email_address: 'Email address must be a valid email address.',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Incorrect Password',
    form_password_not_strong_enough: 'Your password is not strong enough.',
    form_password_size_in_bytes_exceeded:
      'Your password has exceeded the maximum number of bytes allowed, please shorten it or remove some special characters.',
    passwordComplexity: {
      sentencePrefix: 'Your password must contain',
      minimumLength: '{{length}} or more characters',
      maximumLength: 'less than {{length}} characters',
      requireNumbers: 'a number',
      requireLowercase: 'a lowercase letter',
      requireUppercase: 'an uppercase letter',
      requireSpecialCharacter: 'a special character',
    },
    zxcvbn: {
      notEnough: 'Your password is not strong enough.',
      couldBeStronger: 'Your password works, but could be stronger. Try adding more characters.',
      goodPassword: 'Your password meets all the necessary requirements.',
      warnings: {
        straightRow: 'Straight rows of keys on your keyboard are easy to guess.',
        keyPattern: 'Short keyboard patterns are easy to guess.',
        simpleRepeat: 'Repeated characters like "aaa" are easy to guess.',
        extendedRepeat: 'Repeated character patterns like "abcabcabc" are easy to guess.',
        sequences: 'Common character sequences like "abc" are easy to guess.',
        recentYears: 'Recent years are easy to guess.',
        dates: 'Dates are easy to guess.',
        topTen: 'This is a heavily used password.',
        topHundred: 'This is a frequently used password.',
        common: 'This is a commonly used password.',
        similarToCommon: 'This is similar to a commonly used password.',
        wordByItself: 'Single words are easy to guess.',
        namesByThemselves: 'Single names or surnames are easy to guess.',
        commonNames: 'Common names and surnames are easy to guess.',
        userInputs: 'There should not be any personal or page related data.',
        pwned: 'Your password was exposed by a data breach on the Internet.',
      },
      suggestions: {
        l33t: "Avoid predictable letter substitutions like '@' for 'a'.",
        reverseWords: 'Avoid reversed spellings of common words.',
        allUppercase: 'Capitalize some, but not all letters.',
        capitalization: 'Capitalize more than the first letter.',
        dates: 'Avoid dates and years that are associated with you.',
        recentYears: 'Avoid recent years.',
        associatedYears: 'Avoid years that are associated with you.',
        sequences: 'Avoid common character sequences.',
        repeated: 'Avoid repeated words and characters.',
        longerKeyboardPattern: 'Use longer keyboard patterns and change typing direction multiple times.',
        anotherWord: 'Add more words that are less common.',
        useWords: 'Use multiple words, but avoid common phrases.',
        noNeed: 'You can create strong passwords without using symbols, numbers, or uppercase letters.',
        pwned: 'If you use this password elsewhere, you should change it.',
      },
    },
    form_param_max_length_exceeded__name: 'Name should not exceed 256 characters.',
    form_param_max_length_exceeded__first_name: 'First name should not exceed 256 characters.',
    form_param_max_length_exceeded__last_name: 'Last name should not exceed 256 characters.',
  },
  dates: {
    previous6Days: "Last {{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
    lastDay: "Yesterday at {{ date | timeString('en-US') }}",
    sameDay: "Today at {{ date | timeString('en-US') }}",
    nextDay: "Tomorrow at {{ date | timeString('en-US') }}",
    next6Days: "{{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}",
  },
} as const;
