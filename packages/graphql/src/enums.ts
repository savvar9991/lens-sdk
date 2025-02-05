/**
 * Enum for the different authentication roles a user can have.
 */
export enum Role {
  AccountOwner = 'ACCOUNT_OWNER',
  AccountManager = 'ACCOUNT_MANAGER',
  OnboardingUser = 'ONBOARDING_USER',
  Builder = 'BUILDER',
}

/**
 * Enum for the different page sizes available.
 */
export enum PageSize {
  Ten = 'TEN',
  Fifty = 'FIFTY',
}

/**
 * Enum for the different reasons to report an account.
 */
export enum AccountReportReason {
  Impersonation = 'IMPERSONATION',
  RepetitiveSpam = 'REPETITIVE_SPAM',
  Other = 'OTHER',
}

/**
 * Enum for the different type of Post Actions.
 */
export enum PostActionType {
  SimpleCollectAction = 'SIMPLE_COLLECT_ACTION',
  UnknownAction = 'UNKNOWN_ACTION',
}

/**
 * Enum for the different types of reactions a user can have on a post.
 */
export enum PostReactionType {
  Upvote = 'UPVOTE',
  Downvote = 'DOWNVOTE',
}

/**
 * Enum for the different content warnings.
 */
export enum ContentWarning {
  nsfw = 'NSFW',
  sensitive = 'SENSITIVE',
  spoiler = 'SPOILER',
}
