<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bem-vindo(a) ao Meu Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
        }
        .container {
            margin: 0 auto;
            max-width: 600px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
        }
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .signature {
            font-size: 14px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo(a), {{ $name }}!</h1>
        <p>Obrigado por se inscrever em nosso site! Esperamos que você aproveite ao máximo todas as nossas funcionalidades.</p>
        <p>Se precisar de ajuda em alguma coisa, não hesite em nos contatar.</p>
        <p class="signature">Atenciosamente,</p>
        <p class="signature">O melhor software.</p>
    </div>
</body>
</html>
