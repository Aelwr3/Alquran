// تهيئة التخزين المحلي
function initializeStorage() {
    if (!localStorage.getItem('userData')) {
        const userData = {
            username: prompt('ادخل اسمك المستعار:') || 'ضيف',
            country: 'غير محدد',
            startDate: new Date().toISOString(),
            progress: 0,
            readPages: 0
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    }
}

// تحديث دائرة التقدم
function updateProgress() {
    const progressData = JSON.parse(localStorage.getItem('userData'));
    const progressCircle = document.querySelector('.progress-circle');
    const percentageElement = document.querySelector('.percentage');
    
    progressCircle.style.background = 
        `conic-gradient(var(--secondary-color) ${progressData.progress}%, transparent 0%)`;
    percentageElement.textContent = `${Math.round(progressData.progress)}%`;
}

// فتح الجزء اليومي
function openDailySection() {
    // سيتم تطويرها لاحقًا
    alert('سيتم فتح الجزء اليومي هنا!');
}

// تحديث الإحصائيات
function updateStats() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    document.getElementById('remainingDays').textContent = 
        Math.ceil((30 * (100 - userData.progress)) / 100);
    document.getElementById('readPages').textContent = userData.readPages;
}

// التشغيل الأولي
window.onload = function() {
    initializeStorage();
    updateProgress();
    updateStats();
};
