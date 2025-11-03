# Mini-App and Retail Features - Implementation Guide

## Overview
This document describes the new productivity mini-apps and retail store manager agent added to Cherry Studio to support office work and retail operations.

## New Features

### 1. Productivity Mini-Apps

Three new mini-apps have been added to help with office and productivity tasks:

#### Google Sheets
- **Purpose**: Web-based spreadsheet application
- **Access**: Click the Google Sheets icon in the Apps section
- **Requirements**: Google account (free)
- **Use Cases**:
  - Data analysis and reporting
  - Budget planning
  - Inventory tracking
  - KPI dashboards
  - Collaborative spreadsheets

#### Microsoft 365
- **Purpose**: Full Office suite web portal
- **Access**: Click the Microsoft 365 icon in the Apps section
- **Requirements**: Microsoft account (free tier available)
- **Use Cases**:
  - Access Word, Excel, PowerPoint, OneNote
  - Document creation and editing
  - Email (Outlook)
  - Team collaboration
  - File storage (OneDrive)

#### Excel Online
- **Purpose**: Direct access to Excel web application
- **Access**: Click the Excel Online icon in the Apps section
- **Requirements**: Microsoft account
- **Use Cases**:
  - Advanced spreadsheet work
  - Complex formulas and calculations
  - Data visualization
  - Financial modeling
  - Quick access to Excel features

### 2. Retail Store Manager Agent

A specialized AI agent designed for retail store managers, particularly in large chains.

#### How to Access
1. Open Cherry Studio
2. Navigate to Assistants/Agents
3. Search for "Retail Store Manager" or browse Career > Business > Retail
4. Click to start using the agent

#### Core Features

**Recruitment & Staffing**
```
Example: "Create a job description for a cashier position"
Example: "How should I plan staffing for Black Friday?"
```

**Employee Communication**
```
Example: "Draft an announcement about new store hours"
Example: "Help me address a performance issue with tact"
```

**Training & Development**
```
Example: "Create a 2-week training plan for new associates"
Example: "Design a customer service training module"
```

**KPI Monitoring & Analysis**
```
Example: "Our conversion rate dropped 5%, what should I check?"
Example: "How can I improve inventory turnover?"
```

**Operational Excellence**
```
Example: "Create a daily opening checklist"
Example: "How do I handle difficult customer situations?"
```

**Technology Integration**
```
Example: "Best practices for using scheduling software"
Example: "What reports should I review weekly?"
```

## Integration Guide

### Using Productivity Apps with Retail Agent

1. **Data Analysis Workflow**:
   - Ask the Retail Agent to help analyze your sales data
   - Get Excel formulas and analysis techniques
   - Open Excel Online mini-app to apply the analysis
   - Import your store data and generate reports

2. **Document Creation**:
   - Request templates from the Retail Agent (training materials, checklists, etc.)
   - Open Microsoft 365 to create the actual documents
   - Save documents in your OneDrive for easy access

3. **Spreadsheet Templates**:
   - Ask Retail Agent for KPI tracking templates
   - Open Google Sheets to create collaborative dashboards
   - Share with your team for real-time updates

### Example Workflow: Weekly Store Report

```
Step 1: Ask Retail Agent
"What should be included in a weekly store performance report?"

Step 2: Agent provides structure
- Sales vs. targets
- Customer traffic and conversion
- Employee performance metrics
- Inventory status
- Notable incidents/achievements
- Action items for next week

Step 3: Open Excel/Google Sheets
Create spreadsheet with agent's recommended structure

Step 4: Ask Retail Agent for analysis
"Here's my data: [paste data]. What insights can you provide?"

Step 5: Complete report
Use agent insights to complete your report in Microsoft 365
```

## Installation and Setup

### Prerequisites
- Cherry Studio installed and running
- Internet connection
- Google account (for Google Sheets)
- Microsoft account (for Office apps)

### First-Time Setup

1. **Access Mini-Apps**:
   - Click on "Apps" in the sidebar or top navigation
   - Locate the new productivity app icons
   - Click any app to open

2. **Sign In**:
   - First time you open an app, you'll need to sign in
   - Use your existing Google or Microsoft credentials
   - Credentials are stored securely by Google/Microsoft
   - Cherry Studio does not access your credentials

3. **Use the Retail Agent**:
   - No setup required
   - Simply navigate to the agent and start chatting

## Privacy and Security

### Data Storage
- All document data is stored in your Google/Microsoft account
- Cherry Studio does not access, store, or transmit your documents
- Authentication is handled directly by Google/Microsoft

### Session Management
- Each mini-app runs in an isolated webview
- Sessions are independent from your browser
- You can have multiple apps open simultaneously

### Company Policies
- If using for work, ensure compliance with your company's policies
- Office 365 respects enterprise SSO and security policies
- Data residency follows your Google/Microsoft account settings

## Troubleshooting

### Mini-App Issues

**App won't load**
- Check internet connection
- Verify you're signed into the correct account
- Try reloading the app (toolbar reload button)
- Check if the service is accessible from your network

**Authentication problems**
- Clear cookies and cache (app settings)
- Sign out and sign in again
- Verify account credentials in a regular browser
- Check for 2FA requirements

**Performance issues**
- Close unused mini-apps
- Restart Cherry Studio
- Check system resources
- Update to latest Cherry Studio version

### Retail Agent Issues

**Agent not responding as expected**
- Provide more context about your situation
- Be specific about your store type and challenges
- Share relevant data when asking for analysis
- Try rephrasing your question

**Need specific retail chain policies**
- Upload your company handbook to Knowledge Base
- Reference specific policies in your questions
- Agent can adapt general advice to your context

## Tips and Best Practices

### For Store Managers

1. **Daily Routine**:
   - Check KPIs in Excel/Sheets every morning
   - Ask Retail Agent for analysis of any concerning trends
   - Use agent to plan your daily priorities

2. **Weekly Planning**:
   - Create schedules in Excel
   - Ask agent for staffing optimization advice
   - Document wins and challenges for review

3. **Training New Staff**:
   - Get training plan from agent
   - Create materials in Microsoft 365
   - Track progress in spreadsheets

4. **Problem Solving**:
   - Describe issue to Retail Agent first
   - Get action plan and recommendations
   - Document solution in OneNote/Word

### For Maximum Efficiency

1. **Use Keyboard Shortcuts**:
   - Learn Excel/Sheets shortcuts for speed
   - Use Cherry Studio shortcuts to switch between apps

2. **Template Everything**:
   - Ask agent for templates once, save them
   - Reuse and refine templates over time
   - Share useful templates with other managers

3. **Combine Tools**:
   - Use mini-apps for doing
   - Use agent for thinking and planning
   - Use Knowledge Base for reference

## Support and Resources

### Documentation
- [Office Embedding Details](./OFFICE_EMBEDDING.md)
- [Retail Agent Guide](./RETAIL_AGENT.md)
- Cherry Studio main documentation

### Getting Help
- GitHub Issues for bugs
- Community forum for questions
- Agent itself can provide guidance

### Feedback
We welcome feedback on:
- Mini-app functionality
- Agent effectiveness
- Feature requests
- Integration ideas

Report via GitHub Issues with tag `enhancement` or `feedback`.

## Future Enhancements

Planned improvements:
- Word Online mini-app
- PowerPoint Online mini-app
- OneNote integration
- More retail-specific agents (inventory, loss prevention, etc.)
- Direct integration with common POS systems
- Template library for common retail documents

## FAQ

**Q: Can I use these mini-apps offline?**
A: No, they require internet connection as they access web services.

**Q: Is this free?**
A: Cherry Studio is open source and free. Google/Microsoft accounts have free tiers, but premium features may require paid subscriptions.

**Q: Can I use my work account?**
A: Yes, if your IT department allows it. The apps respect enterprise SSO and policies.

**Q: Will these apps work on all platforms?**
A: Yes, they work on Windows, macOS, and Linux versions of Cherry Studio.

**Q: Can I customize the Retail Agent?**
A: You can provide context and use the Knowledge Base to make it more relevant to your specific situation.

**Q: Are there other agents I should try?**
A: Yes! Browse the Career and Business categories for related agents like:
- Sales Operations
- Business Data Analysis
- Project Management
- Marketing

**Q: Can the agent access my actual store data?**
A: No, the agent cannot access your systems. You need to provide data in your questions.

---

**Last Updated**: November 2024
**Version**: 1.0
