<?php include "../dischi.php" ?>
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
        <!-- HANDLEBARS -->
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    </head>
    <body>
        <header>
            <div class="container-header">
                <img src="../icon-spotify.png" alt="icon-spotify">
                <select class="tendina">
                    <option value="">
                        Seleziona
                    </option>
                    <?php foreach ($genres as $genre) { ?>
                            <option value="<?php echo $genre ?>">
                                <?php echo $genre ?>
                            </option>
                        <?php
                        }
                    ?>
                </select>
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
        <!-- TEMPLATE Handlebars -->
        <script id="card-template" type="text/x-handlebars-template">
            <div class="card">
                <img src="{{ poster }}" alt="{{ title }}">
                <h3>{{ title }}</h3>
                <h4>{{ author }}</h4>
                <span>{{ year }}</span>
            </div>
        </script>
        <!-- TEMPLATE tendina Handlebars -->
        <script id="select-template" type="text/x-handlebars-template">
            <option value="{{ genre }}">
                {{ genre }}
            </option>
        </script>
        <!-- JAVASCRIPT -->
        <script src="../dist/main.js" charset="utf-8"></script>
    </body>
</html>
