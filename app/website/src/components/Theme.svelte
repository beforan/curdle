<style>
  /*
   * Define any "themes" as additional classes
   * Override as many or as few variables as desired
   * Then hook up setting the :root class in a switcher
   */
  :root {
    --bg-color: #222;
    --bg-accent: #111;

    --fg-color: #fff;

    --button-color: #888;
    --button-hover: #aaa;
    --button-active: #666;

    --value-border-color: #555;
    --value-active: #0c0;
    --value-missing: #555;
    --value-partial: #b59f3b;
    --value-success: #538d4e;

    /*
     * This is a background-image.
     * Really only needs overriding if it doesn't work on --bg-accent
     */
    --heading-bg: linear-gradient(
      to right,
      hsl(1deg, 96%, 55%),
      hsl(25deg, 100%, 50%),
      hsl(40deg, 100%, 50%),
      hsl(45deg, 100%, 50%),
      hsl(66deg, 100%, 45%),
      hsl(130deg, 100%, 40%),
      hsl(177deg, 100%, 35%)
    );
  }

  :root.theme-light {
    --bg-color: #fff;
    --bg-accent: #fff;

    --value-missing: #ccc;
    --value-border-color: #ccc;

    --fg-color: #111;

    --button-color: #bbb;
    --button-hover: #ddd;
    --button-active: #999;

    --heading-bg: linear-gradient(
      to right,
      hsl(1deg, 50%, 55%),
      hsl(25deg, 50%, 50%),
      hsl(40deg, 50%, 50%),
      hsl(45deg, 50%, 50%),
      hsl(66deg, 50%, 45%),
      hsl(130deg, 50%, 40%),
      hsl(177deg, 50%, 35%)
    );
  }
</style>
