<script>
  import KeypadButton from "./KeypadButton.svelte";
</script>

<section>
  <KeypadButton key="A" />
  <KeypadButton key="B" />
  <KeypadButton key="C" />
  <KeypadButton key="D" />

  <KeypadButton key="7" />
  <KeypadButton key="8" />
  <KeypadButton key="9" />
  <KeypadButton key="E" />

  <KeypadButton key="4" />
  <KeypadButton key="5" />
  <KeypadButton key="6" />
  <KeypadButton key="F" />

  <KeypadButton key="1" />
  <KeypadButton key="2" />
  <KeypadButton key="3" />
  <KeypadButton key="Enter" tall>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      ><path
        d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
      /></svg
    >
  </KeypadButton>

  <KeypadButton key="0" />
  <KeypadButton key="Backspace" long>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      ><path
        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"
      /></svg
    >
  </KeypadButton>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 0.2em;
    width: fit-content;
  }
</style>
