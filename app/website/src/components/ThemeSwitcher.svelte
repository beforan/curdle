<script>
  let darkMode = true;
  const toggleColorMode = () => {
    darkMode = !darkMode;
    document.querySelector(":root").classList.toggle("theme-light");
  };
</script>

<label>
  Dark mode
  <input type="checkbox" on:change={toggleColorMode} checked={darkMode} />
</label>

<style>
  label {
    display: block;
  }
</style>
