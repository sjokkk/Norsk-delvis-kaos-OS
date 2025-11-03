# Office and Productivity App Embedding

## Overview
This document explains the implementation of embedded productivity applications (Google Sheets, Microsoft Office 365, etc.) in Cherry Studio and the limitations for open-source projects.

## Implemented Mini-Apps

### Google Sheets
- **URL**: https://docs.google.com/spreadsheets/
- **Status**: ✅ Available
- **License**: Free to use with Google account
- **Embedding**: Supported via webview

### Microsoft 365
- **URL**: https://www.office.com/
- **Status**: ✅ Available
- **License**: Requires Microsoft account (free tier available)
- **Embedding**: Supported via webview to Office.com web apps

### Excel Online
- **URL**: https://www.office.com/launch/excel
- **Status**: ✅ Available
- **License**: Requires Microsoft account
- **Embedding**: Direct link to Excel web app

## Open Source Considerations

### What is Allowed
1. **Web-based Access**: Linking to and embedding official web versions of these apps is permitted as it uses the standard web interface
2. **User Authentication**: Users must authenticate with their own accounts (Google, Microsoft)
3. **No Redistribution**: We don't redistribute any Microsoft or Google proprietary code
4. **Webview Integration**: Using Electron's webview to access these services is legitimate

### What is NOT Allowed
1. **Desktop App Redistribution**: Cannot bundle Microsoft Office desktop applications
2. **License Bypass**: Cannot provide ways to bypass Microsoft/Google licensing
3. **API Key Sharing**: Cannot share organization API keys or credentials
4. **Reverse Engineering**: Cannot reverse engineer Office protocols

## Technical Implementation

The mini-apps use Electron's `<webview>` tag to embed the web versions of these applications:

```typescript
{
  id: 'google-sheets',
  name: 'Google Sheets',
  url: 'https://docs.google.com/spreadsheets/',
  logo: GoogleSheetsLogo,
  bodered: true
}
```

### User Requirements
- **Google Sheets**: Requires a Google account (free)
- **Microsoft 365**: Requires a Microsoft account (free tier available)
- **Excel Online**: Requires a Microsoft account

### Privacy Considerations
- All data is stored in the user's Google/Microsoft account
- Cherry Studio does not access or store any document data
- Authentication is handled directly by Google/Microsoft
- Session data is isolated per webview

## Alternative Open Source Options

For users who prefer fully open-source alternatives:

1. **LibreOffice Online** - Open source office suite
   - Not currently implemented but could be added
   
2. **Collabora Online** - Open source alternative based on LibreOffice
   - Requires self-hosting
   
3. **OnlyOffice** - Open source office suite
   - Community edition available

## For Enterprise Users (Dad's Work)

### Recommended Approach
1. **Use Microsoft 365 Mini-App**: If your organization has Microsoft 365 licenses, the web version provides full functionality
2. **Single Sign-On (SSO)**: Works with organizational SSO through the browser
3. **Company Policies**: Respects company authentication and security policies

### Limitations
- Desktop application integration is not available in this open-source version
- For full desktop Office integration, users should continue using native Office applications alongside Cherry Studio

## Future Enhancements

Potential improvements while maintaining open-source compliance:

1. **Document Protocol Handlers**: Register Cherry Studio to open Office documents
2. **Quick Actions**: Add quick action buttons for creating new documents
3. **Recent Documents**: Show recently accessed documents (if Microsoft Graph API is available)
4. **Multi-Account Support**: Support multiple Google/Microsoft accounts

## Legal Compliance

This implementation complies with:
- ✅ Google Terms of Service (web embedding)
- ✅ Microsoft Terms of Service (web embedding)  
- ✅ Open Source License (Apache 2.0)
- ✅ No proprietary code redistribution

## Support and Issues

If you encounter issues:
1. Verify your Google/Microsoft account credentials
2. Check network connectivity
3. Ensure your organization allows access to these services
4. Report issues to Cherry Studio GitHub repository

---

**Note**: This is a community-driven open-source project. Users are responsible for complying with their organization's policies and software licensing terms.
