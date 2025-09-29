# UK Digital ID App - Prototype

## Overview
This is a prototype of the **UK Digital ID app**, created using **React Native** and **Expo**.  
The app simulates a modern, governmental-style interface for managing personal information, digital documents, and citizen services. It is intended purely for **demonstration and prototyping purposes**.

The app includes mock features such as:
- Security verification (PIN and fingerprint)
- Digital documents and HMRC records
- Vehicle records and MOT information
- Appointments management
- Reporting issues
- Household properties overview
- Quick shortcuts to other services and links

---

## Features

### Core Screens
- **Splash Screen**: Animated logo and sound effect
- **Security Screen**: PIN entry and fingerprint mock verification
- **Main Dashboard**: User overview, personal details, notifications, and shortcuts
- **Digital Documents**: View ID documents and QR code verification
- **HMRC Records**: Mock financial and tax info
- **My Vehicle**: Vehicle records, MOT, insurance, and licence
- **Appointments**: Upcoming meetings with booking link
- **Report Issues**: Form submission with validation and confirmation
- **Households**: Overview of properties
- **Settings & Notifications**: Toggle options and sliders

### Extras
- Animated elements for cards, buttons, and shortcuts
- Black & white corporate/governmental theme
- Icons for clarity and visual appeal
- External links for services like GOV.UK

---

## Tech Stack
- **React Native**  
- **Expo** (tested with Expo Go on iPhone)  
- **React Navigation** for screen routing  
- **Ionicons** for icons  
- **react-native-animatable** for animations  

---

## Installation

1. Clone the repository:  
```bash
git clone <repository-url>
```

2. Install dependencies:
```
cd <project-folder>
npm install
```

3. Start Expo:
```
npm start
```

4. Open Expo Go on your iPhone and scan the QR code.

## Usage

- This is a mock prototype, so data is static and for demonstration only.
- Shortcuts can navigate to screens or external links using Linking.openURL.
- Security features (PIN, fingerprint) are simulated for visual effect.
- PDF downloads and documents are mock files included in the project.

## Project Structure

```
/assets          # Images, icons, PDFs, sound effects
/screens         # All app screens (Splash, Main, Security, etc.)
/components      # Reusable components (buttons, cards, etc.)
App.js           # Main entry point with navigation
package.json     # Project dependencies
```

## Notes

- Designed for iPhone preview using Expo Go
- Fully customizable with real assets and links
- Ideal for demonstrating UK Digital ID features in meetings or presentations

## License

This project is for educational and prototyping purposes only. No official affiliation with the UK Government.













