interface User {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    phoneNumber: string; // Phone number of the user
    profilePictureUrl?: string; // URL to the user's profile picture
    friends: string[]; // Array of friend user IDs
    studyGroups: string[]; // Array of study group IDs the user is part of
    studyGoals: StudyGoal[]; // Array of study goals
    currentSession?: StudySession; // Current active study session, if any
    studySessions: StudySession[]; // Array of past study sessions
    notifications: Notification[]; // Array of notifications
    leaderboardPoints: number; // Points accumulated for leaderboard
    deviceInfo: DeviceInfo; // Information about the user's device for tracking usage
    createdAt: Date; // Account creation date
    updatedAt: Date; // Last update date
    preferences: UserPreferences; // User preferences and settings
    financialAssistance?: FinancialAssistance; // Financial assistance status for conferences
    isAnonymous: boolean; // Indicates if the user is signed in anonymously
    aiAssistant?: AIAssistant; // AI assistant information for users without friends
  }
  
  interface StudyGoal {
    id: string; // Unique identifier for the study goal
    description: string; // Description of the study goal
    targetHours: number; // Target hours to study
    createdAt: Date; // Date when the goal was created
    updatedAt: Date; // Date when the goal was last updated
  }
  
  interface StudySession {
    id: string; // Unique identifier for the study session
    startTime: Date; // Start time of the study session
    endTime?: Date; // End time of the study session (if ended)
    focusTime: number; // Duration of focused study time in minutes
    preStudySelfieUrl?: string; // URL to the pre-study selfie
    postStudySelfieUrl?: string; // URL to the post-study selfie
    activitiesTracked: Activity[]; // Array of tracked activities during the session
  }
  
  interface Activity {
    app: string; // Name of the app used
    duration: number; // Duration of usage in minutes
  }
  
  interface Notification {
    id: string; // Unique identifier for the notification
    message: string; // Notification message
    type: NotificationType; // Type of notification (e.g., reminder, alert)
    sentAt: Date; // Date when the notification was sent
    read: boolean; // Indicates if the notification has been read
  }
  
  interface DeviceInfo {
    deviceType: DeviceType; // Type of device (e.g., phone, laptop)
    os: string; // Operating system
    browser?: string; // Browser used (if applicable)
  }
  
  interface UserPreferences {
    notificationPreferences: NotificationPreferences; // Preferences for receiving notifications
    studyTimePreferences: StudyTimePreferences; // Preferred study times
  }
  
  interface FinancialAssistance {
    status: FinancialAssistanceStatus; // Status of financial assistance
    amountRequested: number; // Amount of financial assistance requested
    amountGranted?: number; // Amount of financial assistance granted
  }
  
  interface AIAssistant {
    name: string; // Name of the AI assistant
    interactionLogs: InteractionLog[]; // Logs of interactions with the AI assistant
  }
  
  interface InteractionLog {
    date: Date; // Date of interaction
    message: string; // Message exchanged with the AI assistant
  }
  
  type NotificationType = 'reminder' | 'alert' | 'info';
  type DeviceType = 'phone' | 'laptop' | 'tablet';
  type FinancialAssistanceStatus = 'pending' | 'approved' | 'denied';
  
  interface NotificationPreferences {
    email: boolean; // Receive notifications via email
    sms: boolean; // Receive notifications via SMS
    push: boolean; // Receive push notifications
  }
  
  interface StudyTimePreferences {
    preferredStartTime: string; // Preferred start time for study sessions (e.g., '18:00')
    preferredEndTime: string; // Preferred end time for study sessions (e.g., '20:00')
  }
  