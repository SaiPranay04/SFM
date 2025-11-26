# 🌍 Carbon Footprint Calculator - Feature Guide

## Overview

A comprehensive carbon footprint calculator has been added to your SFM platform, allowing anyone to calculate their organization's environmental impact before signing up!

---

## 🎯 How It Works

### **For Visitors (Not Logged In)**

1. **Access the Calculator**
   - Visit the homepage
   - Click **"🌍 Calculate Your Footprint"** button
   - Or navigate to `/calculator` from the menu

2. **Fill in 5 Steps**
   - **Step 1**: Company Information (name, industry, employees)
   - **Step 2**: Office & Facilities (heating, energy, renewable %)
   - **Step 3**: Fleet & Transportation (cars, km driven)
   - **Step 4**: Business Travel (flights, trains)
   - **Step 5**: IT Equipment (laptops, mobiles, monitors, desktops)

3. **Get Instant Results**
   - Total CO₂ emissions per year
   - CO₂ per employee
   - Grade (A+ to F)
   - Detailed breakdown by category
   - Personalized message

4. **Data is Saved**
   - Company profile created automatically
   - Calculation data stored in database
   - Can be accessed later via dashboard

5. **Sign Up to Track**
   - Results page prompts user to sign up
   - Once registered, they can track progress
   - View data in dashboard
   - Edit and update metrics

---

## 📊 Calculation Algorithm

### **Emissions Factors Used**

#### **Office & Heating** (kg CO₂ per sq meter/year)
- Electricity: 0.5
- Natural gas: 0.2
- Domestic Fuel Oil: 0.3
- Biogas: 0.05
- Green Electricity: 0
- Heating Network: 0.15

#### **Fleet** (kg CO₂ per km)
- Average car: 0.12 (120g per km)

#### **Flights** (kg CO₂ per round trip)
- Short-haul: 200 kg
- Long-haul: 1000 kg

#### **Train** (kg CO₂ per journey)
- 14 kg per journey

#### **IT Equipment** (kg CO₂ per device/year)
- Laptop: 200
- Mobile: 80
- Monitor: 150
- Desktop: 300

#### **Energy**
- 0.5 kg CO₂ per kWh consumed

#### **Renewable Offset**
- Reduces total by percentage of renewable energy used

### **Grading System**

| Grade | CO₂ per Employee | Description |
|-------|------------------|-------------|
| **A+** | < 500 kg | Excellent! Very low footprint |
| **A** | 500-1000 kg | Great! Low footprint |
| **B** | 1000-2000 kg | Good - Room for improvement |
| **C** | 2000-3000 kg | Average - Consider reducing |
| **D** | 3000-5000 kg | Below average - Action needed |
| **F** | > 5000 kg | High footprint - Major improvements needed |

---

## 🔄 User Journey

### **Anonymous User Flow**

```
1. Visit homepage
   ↓
2. Click "Calculate Your Footprint"
   ↓
3. Fill 5-step form
   ↓
4. View results with grade & breakdown
   ↓
5. Click "Sign Up to Track Progress"
   ↓
6. Create account
   ↓
7. Login to dashboard
   ↓
8. See their company in Companies list
   ↓
9. View/Edit data in ESG Data Entry
   ↓
10. Track progress over time
```

---

## 💾 Data Storage

### **What Gets Saved**

**1. Company Profile** (`/api/company`)
```json
{
  "name": "Company Name",
  "industry": "Technology",
  "country": "USA",
  "description": "Carbon footprint: 25000 kg CO2/year | Grade: B"
}
```

**2. Organization Calculations** (`/api/organizationcalculations`)
```json
{
  "company_total_employees": 50,
  "company_sector": "Technology",
  "office_heating_source": "Green Electricity",
  "office_surface_area": 500,
  "fleet_totalcars": 10,
  "fleet_km_avg": 15000,
  "travel_short_flight": 20,
  "travel_long_flight": 5,
  "travel_train": 50,
  "IT_laptop": 50,
  "IT_mobile": 60,
  "IT_monitor": 50,
  "IT_desktop": 10
}
```

---

## 🎨 UI Features

### **Multi-Step Form**
- 5 clear steps with progress indicator
- Icons for each category
- Clean, modern design
- Validation on required fields
- Toast notifications

### **Results Page**
- Large grade display with color coding
- Total emissions + per employee
- Detailed breakdown by category
- Call-to-action buttons
- Option to calculate again

### **Responsive Design**
- Works on desktop, tablet, mobile
- Touch-friendly inputs
- Optimized layouts

---

## 🔗 Integration with Dashboard

Once users sign up and login:

### **Companies Page** (`/dashboard/companies`)
- Shows all companies they've calculated
- Displays description with footprint info
- "View" button shows full details

### **ESG Data Entry** (`/dashboard/CompanyEsgData`)
- Select their company from dropdown
- View previously entered data
- Edit and update values
- Recalculate footprint

### **Dashboard** (`/dashboard`)
- Shows total companies count
- Tracks metrics over time
- Visualizes progress

---

## 📱 Access Points

Users can access the calculator from:

1. **Homepage Hero Section**
   - Large "🌍 Calculate Your Footprint" button

2. **Navigation Menu**
   - "🌍 Calculator" link in navbar
   - Available on desktop and mobile

3. **Direct URL**
   - `/calculator` route

---

## 🎯 Benefits

### **For Visitors**
- ✅ Try before signing up
- ✅ Understand their impact
- ✅ See value of platform
- ✅ No commitment required

### **For Business**
- ✅ Lead generation tool
- ✅ Demonstrate value upfront
- ✅ Collect company data
- ✅ Convert visitors to users

### **For Platform**
- ✅ Builds database organically
- ✅ Provides immediate value
- ✅ Encourages sign-ups
- ✅ Creates engagement

---

## 🚀 Future Enhancements

Potential additions:

1. **PDF Report Export**
   - Download results as PDF
   - Include recommendations
   - Shareable with stakeholders

2. **Comparison Tool**
   - Compare to industry average
   - See how others in sector perform
   - Benchmark against standards

3. **Recommendations Engine**
   - Specific reduction suggestions
   - Cost-benefit analysis
   - Prioritized action items

4. **Progress Tracking**
   - Historical data charts
   - Year-over-year comparison
   - Reduction targets

5. **Advanced Calculations**
   - Scope 1, 2, 3 emissions
   - More detailed factors
   - Industry-specific metrics

6. **Carbon Offset Marketplace**
   - Purchase verified offsets
   - Support sustainability projects
   - Track offset investments

---

## 🔧 Technical Details

### **Files Created/Modified**

**New File:**
- `frontend-sfm/src/Components/Home/FootprintCalculator.jsx`

**Modified Files:**
- `frontend-sfm/src/App.js` - Added route
- `frontend-sfm/src/Components/Home/Navbar.jsx` - Added menu link
- `frontend-sfm/src/Components/Home/Home.jsx` - Added CTA button

### **API Endpoints Used**

- `POST /api/company` - Save company profile
- `POST /api/organizationcalculations` - Save calculation data
- `GET /api/company` - View companies in dashboard
- `GET /api/company/:id` - View company details

### **Dependencies**

All existing dependencies, no new packages required:
- React Router - for navigation
- Axios - for API calls
- React Icons - for UI icons
- Toast system - for notifications

---

## 📖 Usage Example

### **Step-by-Step Example**

**1. User visits site**
```
Homepage → Sees "Calculate Your Footprint" button
```

**2. Fills Company Info**
```
Company Name: "Green Tech Inc"
Industry: "Technology"
Country: "United States"
Total Employees: 50
```

**3. Adds Office Data**
```
Heating Source: "Green Electricity"
Surface Area: 500 sq meters
Energy Consumption: 50000 kWh/year
Renewable Energy: 80%
```

**4. Fleet Info**
```
Company Cars: 10
Avg km/year: 15000
```

**5. Travel Data**
```
Short Flights: 20
Long Flights: 5
Train Journeys: 50
```

**6. IT Equipment**
```
Laptops: 50
Mobiles: 60
Monitors: 50
Desktops: 10
```

**7. Gets Result**
```
Grade: B
Total: 25,420 kg CO₂/year
Per Employee: 508 kg CO₂
Message: "Good - Room for improvement"
```

**8. Signs Up**
```
Creates account → Logs in → Views data in dashboard
```

---

## ✅ Testing Checklist

- [ ] Calculator loads without errors
- [ ] All 5 steps navigate correctly
- [ ] Form validation works
- [ ] Calculation produces results
- [ ] Grade displays correctly
- [ ] Breakdown shows all categories
- [ ] Data saves to database
- [ ] Company appears in dashboard
- [ ] Toast notifications appear
- [ ] Sign up link works
- [ ] Mobile responsive
- [ ] Back button works

---

## 🆘 Troubleshooting

### **Calculator not loading**
- Check MongoDB is running
- Verify backend server is running
- Check browser console for errors

### **Results not saving**
- Verify API endpoints are working
- Check MongoDB connection
- Look at backend terminal for errors

### **Wrong calculations**
- Review emission factors in code
- Check input values are correct
- Verify math operations

### **Navigation issues**
- Clear browser cache
- Check route is registered in App.js
- Verify Link components use correct paths

---

## 📞 Support

For issues or questions:
1. Check MongoDB is running
2. Verify both servers are running
3. Check browser console (F12)
4. Check backend terminal logs
5. Refer to main README.md

---

**Feature Status**: ✅ Complete and Ready to Use!

**Version**: 1.1.0
**Date Added**: November 2024

---

*Making sustainability measurement accessible to everyone!* 🌍✨

