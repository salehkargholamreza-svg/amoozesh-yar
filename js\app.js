// ============================================================
// فایل اصلی جاوااسکریپت - آموزش‌یار پرو
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // داده‌های دوره‌ها (۲۰+ دوره)
    // ============================================================

    const COURSES_DATA = {
        junior: [
            { id: 'j1', title: 'آشنایی با اسکرچ جونیور', desc: 'معرفی محیط و شخصیت‌ها', icon: '🐱', level: 'مبتدی', minAge: 5, maxAge: 7, progress: 0 },
            { id: 'j2', title: 'حرکت و انیمیشن', desc: 'یادگیری حرکت دادن شخصیت‌ها', icon: '🏃', level: 'مبتدی', minAge: 5, maxAge: 7, progress: 0 },
            { id: 'j3', title: 'صدا و افکت‌ها', desc: 'اضافه کردن صدا به پروژه‌ها', icon: '🔊', level: 'مبتدی', minAge: 5, maxAge: 7, progress: 0 },
            { id: 'j4', title: 'داستان‌سازی', desc: 'ساخت داستان‌های تعاملی', icon: '📖', level: 'مبتدی', minAge: 5, maxAge: 7, progress: 0 },
            { id: 'j5', title: 'پروژه نهایی جونیور', desc: 'یک بازی ساده با اسکرچ جونیور', icon: '🎮', level: 'مبتدی', minAge: 5, maxAge: 7, progress: 0 }
        ],
        scratch: [
            { id: 's1', title: 'مقدمات اسکرچ', desc: 'آشنایی با محیط و بلوک‌ها', icon: '🟦', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's2', title: 'حرکت و جهت‌یابی', desc: 'کنترل حرکت اسپرایت‌ها', icon: '🧭', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's3', title: 'ظاهر و لباس', desc: 'تغییر ظاهر شخصیت‌ها', icon: '🎨', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's4', title: 'صوت و موسیقی', desc: 'پخش صدا و ساخت موسیقی', icon: '🎵', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's5', title: 'شرط و حلقه', desc: 'یادگیری اگر و تکرار', icon: '🔄', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's6', title: 'متغیرها', desc: 'کار با متغیرها و امتیاز', icon: '📊', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 },
            { id: 's7', title: 'ساخت بازی کامل', desc: 'یک بازی کامل با اسکرچ', icon: '🎯', level: 'متوسط', minAge: 8, maxAge: 12, progress: 0 }
        ],
        python: [
            { id: 'p1', title: 'مقدمات پایتون', desc: 'نصب و اولین برنامه', icon: '🐍', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 },
            { id: 'p2', title: 'متغیرها و داده‌ها', desc: 'کار با اعداد و متون', icon: '📝', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 },
            { id: 'p3', title: 'شرط‌ها', desc: 'اگر و درغیراینصورت در پایتون', icon: '⚖️', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 },
            { id: 'p4', title: 'حلقه‌ها', desc: 'تکرار با for و while', icon: '🔄', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 },
            { id: 'p5', title: 'توابع', desc: 'ساخت توابع ساده', icon: '📦', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 },
            { id: 'p6', title: 'پروژه نهایی پایتون', desc: 'یک برنامه کاربردی با پایتون', icon: '🚀', level: 'پیشرفته', minAge: 13, maxAge: 15, progress: 0 }
        ],
        web: [
            { id: 'w1', title: 'مقدمات HTML', desc: 'ساختار صفحات وب', icon: '🌐', level: 'حرفه‌ای', minAge: 16, maxAge: 18, progress: 0 },
            { id: 'w2', title: 'CSS و استایل‌دهی', desc: 'زیبا کردن صفحات', icon: '🎨', level: 'حرفه‌ای', minAge: 16, maxAge: 18, progress: 0 },
            { id: 'w3', title: 'جاوااسکریپت مقدماتی', desc: 'تعامل با کاربر', icon: '⚡', level: 'حرفه‌ای', minAge: 16, maxAge: 18, progress: 0 },
            { id: 'w4', title: 'پروژه وب‌سایت', desc: 'ساخت یک وب‌سایت کامل', icon: '🚀', level: 'حرفه‌ای', minAge: 16, maxAge: 18, progress: 0 },
            { id: 'w5', title: 'انتشار آنلاین', desc: 'راه‌اندازی وب‌سایت روی هاست', icon: '🌍', level: 'حرفه‌ای', minAge: 16, maxAge: 18, progress: 0 }
        ]
    };

    // ============================================================
    // سیستم کاربران
    // ============================================================

    const USERS_KEY = 'amoozeshYarUsers';
    const CURRENT_USER_KEY = 'amoozeshYarCurrentUser';
    const ADMIN_KEY = 'amoozeshYarAdmin';

    function getUsers() {
        try {
            const data = localStorage.getItem(USERS_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    function getCurrentUser() {
        try {
            const data = localStorage.getItem(CURRENT_USER_KEY);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    }

    function setCurrentUser(user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }

    function clearCurrentUser() {
        localStorage.removeItem(CURRENT_USER_KEY);
    }

    function isAdmin() {
        return localStorage.getItem(ADMIN_KEY) === 'true';
    }

    function setAdmin(status) {
        localStorage.setItem(ADMIN_KEY, String(status));
    }

    // ============================================================
    // توابع کمکی
    // ============================================================

    function getLevelFromAge(age) {
        const a = parseInt(age, 10);
        if (a >= 5 && a <= 7) return 'مبتدی';
        if (a >= 8 && a <= 12) return 'متوسط';
        if (a >= 13 && a <= 15) return 'پیشرفته';
        if (a >= 16 && a <= 18) return 'حرفه‌ای';
        return 'همه سطوح';
    }

    function getLevelColor(level) {
        const map = {
            'مبتدی': '#dcfce7',
            'متوسط': '#fef9c3',
            'پیشرفته': '#fce7f3',
            'حرفه‌ای': '#dbeafe'
        };
        return map[level] || '#e2e8f0';
    }

    function getLevelTextColor(level) {
        const map = {
            'مبتدی': '#166534',
            'متوسط': '#854d0e',
            'پیشرفته': '#9d174d',
            'حرفه‌ای': '#1e40af'
        };
        return map[level] || '#0f172a';
    }

    // ============================================================
    // به‌روزرسانی تعداد کاربران
    // ============================================================

    function updateUserCount() {
        const users = getUsers();
        const count = users.length;

        const el1 = document.getElementById('userCountDisplay');
        if (el1) el1.textContent = count;

        const el2 = document.getElementById('headerUserCount');
        if (el2) el2.textContent = count;
    }

    // ============================================================
    // رندر دوره‌ها
    // ============================================================

    function renderCourses(containerId, courses, userAge) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        courses.forEach(c => {
            const isLocked = userAge && (userAge < c.minAge || userAge > c.maxAge);
            const progress = c.progress || 0;
            const levelColor = getLevelColor(c.level);
            const levelTextColor = getLevelTextColor(c.level);

            html += `
                <div class="course-card ${isLocked ? 'locked' : ''}">
                    ${isLocked ? '<span class="course-lock">🔒</span>' : ''}
                    <span class="course-icon">${c.icon}</span>
                    <div class="course-title">${c.title}</div>
                    <div class="course-desc">${c.desc}</div>
                    <span class="course-level" style="background:${levelColor}; color:${levelTextColor};">
                        ${c.level} (${c.minAge}-${c.maxAge} سال)
                    </span>
                    <div class="course-progress">
                        <div class="progress-bar" style="width: ${isLocked ? '0%' : progress + '%'};"></div>
                    </div>
                    <button class="course-btn" ${isLocked ? 'disabled' : ''}>
                        ${isLocked ? '🔒 نیاز به سن ' + c.minAge + '-' + c.maxAge + ' سال' : '📖 شروع یادگیری'}
                    </button>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    // ============================================================
    // رندر داشبورد
    // ============================================================

    function renderDashboard(user) {
        const statsContainer = document.getElementById('dashboardStats');
        const cardsContainer = document.getElementById('dashboardCards');
        if (!statsContainer || !cardsContainer) return;

        const users = getUsers();
        const totalCourses = Object.values(COURSES_DATA).reduce((acc, arr) => acc + arr.length, 0);

        // آمار
        statsContainer.innerHTML = `
            <div class="stat-card">
                <div class="stat-number">${users.length}</div>
                <div class="stat-label">👥 کاربران</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${totalCourses}</div>
                <div class="stat-label">📚 دوره‌ها</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${user ? getLevelFromAge(user.age) : '-'}</div>
                <div class="stat-label">🎯 سطح شما</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${user ? user.age : '-'}</div>
                <div class="stat-label">📅 سن</div>
            </div>
        `;

        // کارت‌های سریع
        cardsContainer.innerHTML = `
            <div class="dash-card">
                <span class="dash-icon">🟦</span>
                <h4>اسکرچ</h4>
                <p style="color:#64748b; font-size:0.9rem;">${COURSES_DATA.scratch.length} دوره</p>
            </div>
            <div class="dash-card">
                <span class="dash-icon">🧩</span>
                <h4>جونیور</h4>
                <p style="color:#64748b; font-size:0.9rem;">${COURSES_DATA.junior.length} دوره</p>
            </div>
            <div class="dash-card">
                <span class="dash-icon">🐍</span>
                <h4>پایتون</h4>
                <p style="color:#64748b; font-size:0.9rem;">${COURSES_DATA.python.length} دوره</p>
            </div>
            <div class="dash-card">
                <span class="dash-icon">🌐</span>
                <h4>وب‌سازی</h4>
                <p style="color:#64748b; font-size:0.9rem;">${COURSES_DATA.web.length} دوره</p>
            </div>
        `;
    }

    // ============================================================
    // رندر مدیریت
    // ============================================================

    function renderAdmin() {
        const container = document.getElementById('adminContent');
        if (!container) return;

        if (isAdmin()) {
            const users = getUsers();
            let html = `
                <div class="admin-panel">
                    <h3>📊 آمار کاربران</h3>
                    <div class="admin-stats">
                        <div class="stat-item">👥 کل کاربران: <strong>${users.length}</strong></div>
                        <div class="stat-item">📅 امروز: <strong>${new Date().toLocaleDateString('fa-IR')}</strong></div>
                    </div>
                    <div class="admin-search">
                        <input type="text" id="adminSearchInput" placeholder="🔍 جستجوی کاربر..." />
                    </div>
                    <div style="margin: 16px 0;">
                        <button class="clear-all-btn" id="clearAllUsersBtn">🗑️ حذف همه کاربران</button>
                    </div>
                    <h3>👥 لیست کاربران</h3>
                    <div style="overflow-x:auto;">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>نام</th>
                                    <th>نام‌خانوادگی</th>
                                    <th>سن</th>
                                    <th>سطح</th>
                                    <th>تاریخ ثبت‌نام</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody id="usersTableBody"></tbody>
                        </table>
                    </div>
                    <div style="margin-top:16px;">
                        <button class="admin-logout-btn" style="background:#64748b; color:white; border:none; padding:8px 20px; border-radius:40px; cursor:pointer; font-weight:600;">🚪 خروج از مدیریت</button>
                    </div>
                </div>
            `;
            container.innerHTML = html;

            // پر کردن لیست کاربران
            renderUsersTable(users);

            // جستجو
            document.getElementById('adminSearchInput')?.addEventListener('input', function() {
                const search = this.value.trim().toLowerCase();
                const filtered = users.filter(u => 
                    u.name.toLowerCase().includes(search) || 
                    u.family.toLowerCase().includes(search)
                );
                renderUsersTable(filtered);
            });

            // حذف همه
            document.getElementById('clearAllUsersBtn')?.addEventListener('click', function() {
                if (confirm('⚠️ آیا مطمئن هستید که می‌خواهید همه کاربران را حذف کنید؟')) {
                    if (confirm('❗ آخرین تأیید: همه کاربران پاک می‌شوند.')) {
                        localStorage.removeItem(USERS_KEY);
                        localStorage.removeItem(CURRENT_USER_KEY);
                        renderAdmin();
                        updateUserCount();
                        alert('✅ همه کاربران با موفقیت حذف شدند.');
                    }
                }
            });

            // خروج از مدیریت
            document.querySelector('.admin-logout-btn')?.addEventListener('click', function() {
                setAdmin(false);
                renderAdmin();
            });

        } else {
            container.innerHTML = `
                <div class="admin-lock">
                    <div style="font-size:4rem; margin-bottom:10px;">🔐</div>
                    <h3 style="margin-bottom:12px;">ورود به پنل مدیریت</h3>
                    <input type="password" id="adminPasswordInput" placeholder="رمز عبور را وارد کن..." />
                    <button id="adminLoginBtn">✔️ ورود</button>
                    <div class="error" id="adminLoginError">❌ رمز عبور اشتباه است!</div>
                </div>
            `;

            const passwordInput = document.getElementById('adminPasswordInput');
            const loginBtn = document.getElementById('adminLoginBtn');
            const errorEl = document.getElementById('adminLoginError');

            function checkAdminPassword() {
                const pass = passwordInput.value.trim();
                if (pass === 'admin123') {
                    setAdmin(true);
                    errorEl.style.display = 'none';
                    renderAdmin();
                } else {
                    errorEl.style.display = 'block';
                    passwordInput.value = '';
                    passwordInput.focus();
                }
            }

            loginBtn.addEventListener('click', checkAdminPassword);
            passwordInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') checkAdminPassword();
            });
        }
    }

    function renderUsersTable(users) {
        const body = document.getElementById('usersTableBody');
        if (!body) return;

        if (users.length === 0) {
            body.innerHTML = `<tr><td colspan="7" style="padding:20px; color:#94a3b8;">هیچ کاربری یافت نشد.</td></tr>`;
            return;
        }

        let rows = '';
        users.forEach((u, i) => {
            const level = getLevelFromAge(u.age);
            const levelColor = getLevelColor(level);
            const levelTextColor = getLevelTextColor(level);
            rows += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${u.name}</td>
                    <td>${u.family}</td>
                    <td>${u.age}</td>
                    <td><span style="background:${levelColor}; color:${levelTextColor}; padding:2px 12px; border-radius:40px; font-size:0.8rem;">${level}</span></td>
                    <td>${new Date(u.registerDate).toLocaleDateString('fa-IR')}</td>
                    <td><button class="delete-user-btn" data-id="${u.id}">🗑️</button></td>
                </tr>
            `;
        });
        body.innerHTML = rows;

        document.querySelectorAll('.delete-user-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id, 10);
                if (confirm('⚠️ آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟')) {
                    let usersList = getUsers();
                    usersList = usersList.filter(u => u.id !== id);
                    saveUsers(usersList);
                    const current = getCurrentUser();
                    if (current && current.id === id) {
                        clearCurrentUser();
                        location.reload();
                    } else {
                        renderAdmin();
                        updateUserCount();
                    }
                }
            });
        });
    }

    // ============================================================
    // سیستم ثبت‌نام و ورود
    // ============================================================

    const registerPage = document.getElementById('registerPage');
    const mainSite = document.querySelector('.container');
    const registerForm = document.getElementById('registerForm');
    const registerError = document.getElementById('registerError');
    const registerSuccess = document.getElementById('registerSuccess');
    const userGreeting = document.getElementById('userGreeting');
    const userLevelBadge = document.getElementById('userLevelBadge');
    const logoutBtn = document.getElementById('logoutBtn');

    function showUserInfo(user) {
        if (!user) return;
        const level = getLevelFromAge(user.age);
        const levelColor = getLevelColor(level);
        const levelTextColor = getLevelTextColor(level);

        userGreeting.textContent = `👋 ${user.name} ${user.family} (${user.age} سال)`;
        userLevelBadge.textContent = `🎯 ${level}`;
        userLevelBadge.style.background = levelColor;
        userLevelBadge.style.color = levelTextColor;
    }

    function checkLogin() {
        const user = getCurrentUser();

        if (user) {
            registerPage.classList.add('hidden');
            mainSite.style.display = 'block';

            showUserInfo(user);
            renderDashboard(user);

            const age = parseInt(user.age, 10);
            renderCourses('courseGrid', [
                ...COURSES_DATA.junior,
                ...COURSES_DATA.scratch,
                ...COURSES_DATA.python,
                ...COURSES_DATA.web
            ], age);
            renderCourses('juniorCourses', COURSES_DATA.junior, age);
            renderCourses('scratchCourses', COURSES_DATA.scratch, age);
            renderCourses('pythonCourses', COURSES_DATA.python, age);
            renderCourses('webCourses', COURSES_DATA.web, age);

            renderAdmin();
            updateUserCount();

            // نمایش منوی مناسب
            const menuBtns = document.querySelectorAll('.nav-btn');
            const showPages = ['dashboard', 'courses', 'math', 'zarb', 'notebook', 'admin'];
            if (age >= 5 && age <= 7) showPages.push('junior');
            if (age >= 8 && age <= 12) showPages.push('scratch');
            if (age >= 13 && age <= 15) showPages.push('python');
            if (age >= 16 && age <= 18) showPages.push('web');

            menuBtns.forEach(btn => {
                const page = btn.dataset.page;
                if (showPages.includes(page) || page === 'dashboard' || page === 'courses' || 
                    page === 'math' || page === 'zarb' || page === 'notebook' || page === 'admin') {
                    btn.style.display = 'flex';
                } else {
                    btn.style.display = 'none';
                }
            });

        } else {
            registerPage.classList.remove('hidden');
            mainSite.style.display = 'none';
            updateUserCount();
            registerError.style.display = 'none';
            registerSuccess.style.display = 'none';
        }
    }

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('regName').value.trim();
        const family = document.getElementById('regFamily').value.trim();
        const age = document.getElementById('regAge').value.trim();

        if (!name || !family || !age) {
            registerError.style.display = 'block';
            registerError.textContent = '❌ لطفاً همه‌ی فیلدها را پر کنید.';
            registerSuccess.style.display = 'none';
            return;
        }

        const ageNum = parseInt(age, 10);
        if (isNaN(ageNum) || ageNum < 4 || ageNum > 99) {
            registerError.style.display = 'block';
            registerError.textContent = '❌ سن باید عددی بین ۴ تا ۹۹ باشد.';
            registerSuccess.style.display = 'none';
            return;
        }

        registerError.style.display = 'none';

        const users = getUsers();
        const newUser = {
            id: Date.now(),
            name: name,
            family: family,
            age: ageNum,
            registerDate: new Date().toISOString()
        };
        users.push(newUser);
        saveUsers(users);
        setCurrentUser(newUser);

        registerSuccess.style.display = 'block';

        setTimeout(function() {
            checkLogin();
        }, 800);
    });

    logoutBtn.addEventListener('click', function() {
        clearCurrentUser();
        setAdmin(false);
        checkLogin();
    });

    // ============================================================
    // منو
    // ============================================================

    const navBtns = document.querySelectorAll('.nav-btn');
    const pages = {
        dashboard: document.getElementById('page-dashboard'),
        courses: document.getElementById('page-courses'),
        scratch: document.getElementById('page-scratch'),
        junior: document.getElementById('page-junior'),
        python: document.getElementById('page-python'),
        web: document.getElementById('page-web'),
        math: document.getElementById('page-math'),
        zarb: document.getElementById('page-zarb'),
        notebook: document.getElementById('page-notebook'),
        admin: document.getElementById('page-admin')
    };

    function showPage(pageId) {
        for (const [id, el] of Object.entries(pages)) {
            if (el) el.classList.remove('active');
        }
        if (pages[pageId]) {
            pages[pageId].classList.add('active');
        }
        navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.page === pageId) {
                btn.classList.add('active');
            }
        });

        // اگر صفحه مدیریت است، دوباره رندر کن
        if (pageId === 'admin') {
            renderAdmin();
        }
    }

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.dataset.page;
            if (pageId) showPage(pageId);
        });
    });

    // ============================================================
    // جدول ضرب
    // ============================================================

    function buildZarbTables() {
        const tables = [
            document.getElementById('zarb-table'),
            document.getElementById('zarb-table2')
        ];
        tables.forEach(table => {
            if (!table) return;
            let html = '<thead><tr><th>×</th>';
            for (let i = 1; i <= 10; i++) {
                html += `<th>${i}</th>`;
            }
            html += '</tr></thead><tbody>';
            for (let i = 1; i <= 10; i++) {
                html += `<tr><th>${i}</th>`;
                for (let j = 1; j <= 10; j++) {
                    html += `<td>${i * j}</td>`;
                }
                html += '</tr>';
            }
            html += '</tbody>';
            table.innerHTML = html;
        });
    }
    buildZarbTables();

    // ============================================================
    // بازی جمع
    // ============================================================

    const questionEl = document.getElementById('mathQuestion');
    const answerInput = document.getElementById('mathAnswer');
    const checkBtn = document.getElementById('mathCheckBtn');
    const resultEl = document.getElementById('mathResult');

    let num1 = 0, num2 = 0;

    function newMathQuestion() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        questionEl.textContent = `${num1} + ${num2} = ؟`;
        answerInput.value = '';
        resultEl.textContent = '🤔 پاسخ خود را وارد کنید';
        resultEl.className = 'result';
        answerInput.focus();
    }
    newMathQuestion();

    checkBtn.addEventListener('click', function() {
        const userAnswer = parseInt(answerInput.value.trim(), 10);
        if (isNaN(userAnswer)) {
            resultEl.textContent = '⚠️ لطفاً یک عدد وارد کنید.';
            resultEl.className = 'result wrong';
            return;
        }
        const correct = num1 + num2;
        if (userAnswer === correct) {
            resultEl.textContent = `✅ درسته! آفرین! 🎉 (جواب: ${correct})`;
            resultEl.className = 'result correct';
            setTimeout(newMathQuestion, 900);
        } else {
            resultEl.textContent = `❌ نه، دوباره امتحان کن. (جواب صحیح: ${correct})`;
            resultEl.className = 'result wrong';
            answerInput.value = '';
            answerInput.focus();
        }
    });

    answerInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') checkBtn.click();
    });

    // ============================================================
    // بازی ضرب
    // ============================================================

    function setupZarbGame(questionId, answerId, checkId, resultId) {
        const qEl = document.getElementById(questionId);
        const aEl = document.getElementById(answerId);
        const cBtn = document.getElementById(checkId);
        const rEl = document.getElementById(resultId);

        if (!qEl || !aEl || !cBtn || !rEl) return;

        let z1 = 0, z2 = 0;

        function newQ() {
            z1 = Math.floor(Math.random() * 10) + 1;
            z2 = Math.floor(Math.random() * 10) + 1;
            qEl.textContent = `${z1} × ${z2} = ؟`;
            aEl.value = '';
            rEl.textContent = '🤔 پاسخ خود را وارد کنید';
            rEl.className = 'result';
            aEl.focus();
        }
        newQ();

        cBtn.addEventListener('click', function() {
            const userAnswer = parseInt(aEl.value.trim(), 10);
            if (isNaN(userAnswer)) {
                rEl.textContent = '⚠️ لطفاً یک عدد وارد کنید.';
                rEl.className = 'result wrong';
                return;
            }
            const correct = z1 * z2;
            if (userAnswer === correct) {
                rEl.textContent = `✅ درسته! آفرین! 🎉 (جواب: ${correct})`;
                rEl.className = 'result correct';
                setTimeout(newQ, 900);
            } else {
                rEl.textContent = `❌ نه، دوباره امتحان کن. (جواب صحیح: ${correct})`;
                rEl.className = 'result wrong';
                aEl.value = '';
                aEl.focus();
            }
        });

        aEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') cBtn.click();
        });
    }

    setupZarbGame('zarbQuestion', 'zarbAnswer', 'zarbCheckBtn', 'zarbResult');
    setupZarbGame('zarbQuestion2', 'zarbAnswer2', 'zarbCheckBtn2', 'zarbResult2');

    // ============================================================
    // شروع
    // ============================================================

    // مخفی کردن سایت اصلی تا ثبت‌نام
    document.querySelector('.container').style.display = 'none';

    checkLogin();
    console.log('✅ آموزش‌یار پرو با ۲۰+ دوره بارگذاری شد!');
    console.log('👥 تعداد کاربران:', getUsers().length);
    console.log('🔑 رمز مدیریت: admin123');
})();
