const messages = [
    "اقرأ ورتل كما كنت ترتل في الدنيا...",
    "تدبر آيات الله، فإنها نور لقلبك...",
    "عاهدت القرآن، فاجعل عهدك مستمرًا..."
];

document.getElementById('message').textContent = messages[Math.floor(Math.random() * messages.length)];

// تحديث شريط التقدم
function updateProgress(percentage) {
    document.getElementById('progress').style.strokeDashoffset = 283 - (percentage * 2.83);
    document.getElementById('progress-text').textContent = percentage + "%";
}

updateProgress(10);