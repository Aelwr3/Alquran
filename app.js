// تهيئة التطبيق
function initializeApp() {
    // تحميل البيانات من localStorage
    const savedData = localStorage.getItem('quranProgress');
    if (!savedData) {
        const defaultData = {
            username: 'ضيف',
            progress: 30,
            daysRemaining: 21,
            currentPart: 'سورة البقرة (1-20)'
        };
        localStorage.setItem('quranProgress', JSON.stringify(defaultData));
    }
    
    // تطبيق الثيم
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // تحديث الواجهة
    updateUI();
}

// تبديل الثيم
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// فتح نافذة الجزء اليومي
document.getElementById('dailyButton').addEventListener('click', () => {
    document.querySelector('.daily-modal').style.display = 'flex';
});

// إغلاق النافذة
function closeDailyModal() {
    document.querySelector('.daily-modal').style.display = 'none';
}

// تحديث البيانات
function updateUI() {
    const data = JSON.parse(localStorage.getItem('quranProgress'));
    
    document.querySelector('.percentage').textContent = `${data.progress}%`;
    document.querySelector('.surah-name').textContent = data.currentPart;
    document.querySelectorAll('.stat-item p')[0].textContent = `${data.daysRemaining} يومًا`;
}

// التشغيل الأولي
window.addEventListener('load', initializeApp);
