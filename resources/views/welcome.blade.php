<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
         @vite('resources/css/app.css')

    </head>

<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to Notes Manager</h1>
        <p class="text-gray-600 text-lg mb-6">Manage your notes efficiently with Laravel & Tailwind CSS.</p>
        <a href="" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
            Get Started
        </a>
    </div>
</body>

</html>
