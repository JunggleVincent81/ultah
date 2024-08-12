<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday!</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center overflow-hidden">
    <div class="relative text-center bg-white p-10 rounded-lg shadow-2xl max-w-lg mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 class="text-5xl font-extrabold text-pink-600 mb-4 animate-fadeIn">🎉 Happy Birthday, Santi! 🎉</h1>
        <p class="text-xl text-gray-700 mb-6 animate-bounce">Wishing you a day filled with love, joy, and all your favorite things.</p>
        <button id="celebrateBtn" class="bg-pink-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-2xl transition-all duration-300">
            Celebrate Now!
        </button>
    </div>

    <div id="confetti-container" class="absolute inset-0 pointer-events-none"></div>



    
</body>
</html>
