<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }} | @yield('title')</title>

    @vite(['./resources/css/app.css', './resources/js/app.js'])

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body id="app" class="flex text-white">

    <admin-sidebar></admin-sidebar>

    <div class="flex-1 bg-primary-darker p-8">
        <h1 class="text-2xl mb-4">@yield('title')</h1>
        @yield('body')
    </div>

</body>
</html>
