<?php include "dischi.php" ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Php-dischi</title>
        <!-- CSS -->
        <link rel="stylesheet" href="../dist/style.css">
        <!-- GOOGLE FONT -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <div class="container">
                <img src="icon-spotify.png" alt="icon-spotify">
            </div>
        </header>
        <main>
            <div class="container">
                <?php foreach ($dischi as $disco) { ?>
                    <div class="card">
                        <img src="<?php echo $disco["poster"]; ?>" alt="disco.author">
                        <h3><?php echo $disco["title"]; ?></h3>
                        <h4><?php echo $disco["author"]; ?></h4>
                        <span><?php echo $disco["year"]; ?></span>
                    </div>
                <?php
                }
                ?>
            </div>
        </main>
    </body>
</html>
