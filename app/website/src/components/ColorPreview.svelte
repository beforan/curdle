<script>
  // import {today} from "../lib/today";
  //`background-image: url(/${today}.png);`;
  // TODO
  const style = `background-image: url(/test.png);`;
</script>

<div {style}>
  <div class="label">Target</div>
</div>

<style>
  div {
    border-radius: 5px;
    background-repeat: repeat;
  }

  .label {
    text-align: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    padding: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    user-select: none;
  }
</style>
