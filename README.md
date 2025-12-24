# Flashcard Mobile App

A comprehensive cross-platform mobile application for creating, studying, and mastering flashcards using spaced repetition algorithms. Built with React Native, Expo, and TypeScript.

## Features

### Core Functionality
- **Flashcard Management**: Create, edit, delete, and organize flashcards with questions and answers
- **Category Organization**: Group flashcards into subjects, topics, or custom categories
- **Study Mode**: Interactive study sessions with card flipping and intuitive navigation
- **Spaced Repetition**: Intelligent SM-2 algorithm for optimal learning and retention
- **Quiz Mode**: Test your knowledge with multiple-choice and typed-answer quizzes
- **Progress Tracking**: Comprehensive statistics, study streaks, and visual progress charts
- **Multimedia Support**: Attach images and audio to flashcards for enhanced learning
- **Offline-First**: Full functionality offline with automatic cloud synchronization

### Advanced Features
- **Cloud Sync**: Automatic synchronization across multiple devices
- **Conflict Resolution**: Smart handling of data conflicts with version control
- **Dark Mode Support**: Eye-friendly theme options
- **Daily Goals**: Set and track study goals with notifications
- **Data Export/Import**: Backup and share your flashcard collections
- **Search & Filter**: Quickly find flashcards by content or category

## Tech Stack

### Frontend
- **React Native** - Cross-platform mobile framework
- **Expo SDK 52+** - Development platform and tooling
- **TypeScript** - Type-safe development
- **React Navigation v6** - Navigation and routing
- **React Native Paper** - Material Design UI components
- **React Native Reanimated v3** - Smooth animations
- **React Native Gesture Handler** - Touch gestures

### State Management
- **Zustand** - Lightweight global state management
- **React Query (TanStack Query)** - Server state and caching

### Data & Storage
- **Expo SQLite** - Local database with encryption
- **Supabase** - PostgreSQL backend with authentication
- **Supabase Storage** - Cloud storage for multimedia files

### Utilities
- **supermemo** - SM-2 spaced repetition algorithm
- **date-fns** - Date manipulation and formatting
- **zod** - Runtime type validation
- **Victory Native** - Data visualization and charts

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Git** - Version control
- **iOS Simulator** (macOS only) or **Android Studio** (for Android emulator)
- **Supabase Account** - [Sign up](https://supabase.com/)

### Mobile Development Setup
- For iOS: Xcode (macOS only)
- For Android: Android Studio with Android SDK

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/flashcard-app-mobile.git
cd flashcard-app-mobile
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics, Error Tracking
EXPO_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 4. Set Up Supabase Backend

1. Create a new Supabase project at [supabase.com](https://supabase.com/)
2. Run the database migrations:
   ```bash
   cd supabase
   supabase db push
   ```
3. Configure authentication providers in Supabase dashboard
4. Set up Row Level Security (RLS) policies

### 5. Start Development Server
```bash
npx expo start
```

### 6. Run on Device/Simulator
- **iOS**: Press `i` in the terminal or scan QR code with Expo Go app
- **Android**: Press `a` in the terminal or scan QR code with Expo Go app
- **Web**: Press `w` for web version (limited functionality)

## Project Structure

```
flashcard-app-mobile/
├── src/
│   ├── app/                          # Screens and routes
│   │   ├── (auth)/                   # Authentication screens
│   │   ├── (tabs)/                   # Main tab navigation
│   │   └── (modals)/                 # Modal screens
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── flashcard/                # Flashcard-related components
│   │   ├── study/                    # Study mode components
│   │   ├── quiz/                     # Quiz components
│   │   ├── progress/                 # Progress tracking components
│   │   └── common/                   # Shared components
│   │
│   ├── services/                     # Business logic and services
│   │   ├── database/                 # SQLite database layer
│   │   ├── sync/                     # Cloud synchronization
│   │   ├── spaced-repetition/        # SM-2 algorithm
│   │   ├── multimedia/               # Image/audio handling
│   │   ├── supabase/                 # Supabase API
│   │   └── analytics/                # Statistics and tracking
│   │
│   ├── store/                        # Zustand state management
│   ├── hooks/                        # Custom React hooks
│   ├── types/                        # TypeScript type definitions
│   ├── utils/                        # Utility functions
│   ├── config/                       # Configuration files
│   └── assets/                       # Images, fonts, sounds
│
├── supabase/                         # Backend configuration
│   ├── migrations/                   # Database migrations
│   └── functions/                    # Edge functions
│
├── app.json                          # Expo configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## Development Workflow

### Creating a New Feature

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Implement the feature** following the project structure
3. **Test thoroughly** on both iOS and Android
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a pull request**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Running Tests
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Building for Production

#### iOS
```bash
# Build for iOS
npx eas build --platform ios

# Submit to App Store
npx eas submit --platform ios
```

#### Android
```bash
# Build for Android
npx eas build --platform android

# Submit to Google Play
npx eas submit --platform android
```

## Key Features Explained

### Spaced Repetition (SM-2 Algorithm)

The app uses the SuperMemo SM-2 algorithm for optimal learning:

- **Quality Ratings (0-5)**: After reviewing a card, rate how well you remembered it
  - 0: Complete blackout
  - 1: Incorrect but familiar
  - 2: Incorrect but easy to recall
  - 3: Correct with difficulty
  - 4: Correct with hesitation
  - 5: Perfect response

- **Adaptive Scheduling**: Cards you struggle with appear more frequently, while mastered cards have longer intervals

- **Easiness Factor**: Each card has a difficulty rating that adjusts based on your performance

### Offline-First Architecture

The app is designed to work seamlessly offline:

1. **Local-First**: All data is stored locally in SQLite
2. **Instant UI Updates**: Changes appear immediately
3. **Offline Queue**: Operations are queued when offline
4. **Automatic Sync**: Syncs with cloud when connection is restored
5. **Conflict Resolution**: Smart handling of data conflicts

### Cloud Synchronization

- **Bidirectional Sync**: Changes sync from device to cloud and vice versa
- **Version Control**: Conflict detection using timestamps and version numbers
- **Last-Write-Wins**: Latest changes take precedence
- **Selective Sync**: Only sync changed data for efficiency

### Multimedia Support

- **Images**: Attach photos from camera or gallery
- **Audio**: Record and play audio clips
- **Compression**: Automatic image compression for storage efficiency
- **Cloud Backup**: Files backed up to Supabase Storage
- **Lazy Loading**: Download files only when needed

## Database Schema

### Local SQLite Tables
- `categories` - Category organization
- `flashcards` - Core flashcard data
- `flashcard_metadata` - Spaced repetition metadata
- `study_sessions` - Study session tracking
- `study_session_cards` - Per-card review data
- `quiz_results` - Quiz performance tracking
- `user_settings` - User preferences
- `offline_queue` - Pending sync operations
- `sync_metadata` - Sync state tracking

### Cloud Supabase Schema
- Mirrors local schema with PostgreSQL
- Row Level Security (RLS) for data isolation
- Real-time subscriptions for live updates

## Configuration

### App Configuration (`app.json`)
- App name, version, and metadata
- Expo SDK version
- Permissions (camera, microphone, storage)
- Splash screen and icon
- Build configuration

### TypeScript Configuration (`tsconfig.json`)
- Path aliases for cleaner imports
- Strict type checking
- Module resolution

## Performance Optimization

- **Database Indexing**: Optimized queries with proper indexes
- **Lazy Loading**: Components and images load on-demand
- **Memoization**: React.memo for expensive components
- **FlatList Optimization**: Virtualized lists for large datasets
- **Image Caching**: Efficient image caching strategy

## Security

- **Expo SecureStore**: Secure storage for authentication tokens
- **SQLCipher Encryption**: Encrypted local database
- **Row Level Security**: Supabase RLS policies
- **Input Validation**: Zod schemas for runtime validation
- **HTTPS Only**: All network requests use HTTPS

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start --clear
```

**Database Issues**
```bash
# Reset local database (WARNING: Deletes all local data)
# This will be re-synced from cloud if available
rm -rf ~/.expo/flashcard-app-mobile.db
```

**Sync Problems**
- Check network connection
- Verify Supabase credentials in `.env`
- Check Supabase dashboard for RLS policy issues

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write or update tests
5. Ensure all tests pass
6. Submit a pull request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier (run `npm run lint` and `npm run format`)
- Write meaningful commit messages (Conventional Commits format)
- Add comments for complex logic

## Roadmap

### Upcoming Features
- [ ] Collaborative flashcard sets
- [ ] Community marketplace
- [ ] AI-powered flashcard generation
- [ ] Advanced study modes (matching, fill-in-blank)
- [ ] Social features (study groups, leaderboards)
- [ ] Web version
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **SuperMemo** - For the SM-2 spaced repetition algorithm
- **Expo Team** - For the excellent development platform
- **Supabase** - For the backend infrastructure
- **React Native Community** - For the amazing ecosystem

## Support

For questions, issues, or feature requests:

- **Issues**: [GitHub Issues](https://github.com/yourusername/flashcard-app-mobile/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/flashcard-app-mobile/discussions)
- **Email**: support@yourapp.com

## Screenshots

_Coming soon - Add screenshots of your app here_

## Authors

- Your Name - [GitHub](https://github.com/yourusername)

---

**Happy Learning!** 🚀📚
