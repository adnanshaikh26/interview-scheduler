# Interview Scheduler

## 🚀 Project Overview
The **Interview Scheduler** is a React-based web application that enables HR and recruiters to efficiently schedule, manage, and view interviews. It ensures **conflict-free scheduling** and provides an easy-to-use dashboard for interview tracking.

---

## 📌 Features
### 🔹 Core Features
- **Schedule Interviews**: Select candidate, interviewer, date, and time slot.
- **Conflict Validation**: Prevents overlapping interviews and enforces a **1-hour gap**.
- **Dashboard View**: Displays all scheduled interviews in a table format.
- **Filters**: Filter interviews by date, interviewer, or candidate.
- **Edit & Reschedule**: Modify existing interview details.
- **Delete Interviews**: Remove scheduled interviews with confirmation.
- **Notifications**: Displays success/error messages for actions.



## 🛠️ Tech Stack
- **Frontend**: React.js (Redux Toolkit)
- **UI Framework**: Ant Design, Styled Components
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Calendar Integration**: `fullcalendar`

---

## 🔧 Setup Instructions
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/adnanshaikh26/interview-schedule.git
cd interview-scheduler
```

### **2️⃣ Install Dependencies**
```sh
yarn install  # or npm install
```

### **3️⃣ Start the Development Server**
```sh
yarn start  # or npm start
```

### **4️⃣ Running the Mock API (Optional)**
If using JSON Server for data persistence:
```sh
npx json-server --watch db.json --port 5000
```

---

## 🎨 Design Decisions
### ✅ **1. State Management**
- Used **Redux Toolkit** for centralized interview state management.
- **Why?** Easily scalable for API integration and better debugging.

### ✅ **2. UI & Styling**
- Used **Ant Design** for table, modal, and form elements for a **professional look**.
- Applied **Styled Components** for modular, maintainable styles.


### ✅ **3. Routing & Navigation**
- Used **React Router** to separate views: `Dashboard`, `Create/Edit Interview`.

---

## 📸 Screenshots (Optional)
![image](https://github.com/user-attachments/assets/33e7ff0a-3674-4b48-9ea7-7ca7304df5ba)
![image](https://github.com/user-attachments/assets/74d07b49-eb94-4f81-99bf-8600ca04bb69)



---

## 🏗️ Future Enhancements
- ✅ API integration for real-time interview scheduling.
- ✅ Google Calendar / Outlook API sync.
- ✅ Drag & drop rescheduling using `react-big-calendar`.
- ✅ Authentication (Admin login for HR access).

---

## 🤝 Contributing
Feel free to **fork** this repository and submit **pull requests**!

---

## 📄 License
MIT License © 2025 Adnan Shaikh

---

## 📬 Contact
- **Email**: adnan.shk.26@gmail.com
- **GitHub**: [adnanshaikh26](https://github.com/adnanshaikh26)

