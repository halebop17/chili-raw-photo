// "Try a frame" on the Frames page. A mount is laid out the way Chili RAW's
// export lays it out: the border is a share of the photo's short side, and a
// shape grows one side of the canvas until it fits, never cropping. Dithered
// and Film are painted effects, so those show the render nearest the slider.
(() => {
  const tf = document.querySelector(".tf");
  if (!tf) return;
  const stage = tf.querySelector(".tf-stage");
  const slider = tf.querySelector("#tf-t");
  const output = tf.querySelector(".tf-thick output");
  const plains = {};
  tf.querySelectorAll(".tf-plain").forEach((img) => { plains[img.dataset.photo] = img; });

  const COLOURS = { white: "#ffffff", black: "#000000", grey: "#808080", "4x5": "#ffffff", "9x16": "#ffffff" };
  const RATIOS = { "4x5": 4 / 5, "9x16": 9 / 16 };
  const PAINTED = { min: 3, max: 15, step: 3 };   // the renders on the page
  const MOUNT = { min: 0, max: 25, step: 0.5 };   // the export dialog's range
  const thickness = { mount: 5, painted: 9 };

  const live = document.createElement("div");
  live.className = "tf-live";
  const liveImg = document.createElement("img");
  liveImg.alt = "";
  live.append(liveImg);
  stage.append(live);
  tf.classList.add("tf-js");

  const checked = (name) => tf.querySelector(`input[name="${name}"]:checked`).id.slice(3);

  function layout(w, h, percent, ratio) {
    const border = Math.round((percent / 100) * Math.min(w, h));
    let cw = w + 2 * border, ch = h + 2 * border;
    if (ratio) {
      const current = cw / ch;
      if (current < ratio) cw = Math.max(cw, Math.round(ch * ratio));
      else if (current > ratio) ch = Math.max(ch, Math.round(cw / ratio));
    }
    return { cw, ch, x: Math.floor((cw - w) / 2), y: Math.floor((ch - h) / 2) };
  }

  function render() {
    const photo = checked("tf-photo"), frame = checked("tf-frame");
    const painted = frame === "dithered" || frame === "film";
    const range = painted ? PAINTED : MOUNT;
    const value = painted ? thickness.painted : thickness.mount;
    Object.assign(slider, { min: range.min, max: range.max, step: range.step });
    slider.value = value;
    output.textContent = `${value} %`;

    tf.querySelectorAll(".tf-img.tf-on").forEach((img) => img.classList.remove("tf-on"));
    live.classList.toggle("tf-on", !painted);
    if (painted) {
      tf.querySelector(`.tf-img[data-photo="${photo}"][data-frame="${frame}"][data-t="${value}"]`)
        ?.classList.add("tf-on");
      return;
    }
    const plain = plains[photo];
    const w = plain.naturalWidth || plain.width, h = plain.naturalHeight || plain.height;
    const { cw, ch, x, y } = layout(w, h, value, RATIOS[frame]);
    const fit = Math.min((stage.clientWidth * 0.84) / cw, (stage.clientHeight * 0.86) / ch);
    live.style.width = `${cw * fit}px`;
    live.style.height = `${ch * fit}px`;
    live.style.background = frame === "colour" ? plain.dataset.colour : COLOURS[frame];
    if (liveImg.src !== plain.src) { liveImg.src = plain.src; liveImg.alt = plain.alt; }
    Object.assign(liveImg.style, {
      left: `${(x / cw) * 100}%`, top: `${(y / ch) * 100}%`,
      width: `${(w / cw) * 100}%`, height: `${(h / ch) * 100}%`,
    });
  }

  slider.addEventListener("input", () => {
    const painted = ["dithered", "film"].includes(checked("tf-frame"));
    thickness[painted ? "painted" : "mount"] = Number(slider.value);
    render();
  });
  tf.addEventListener("change", (e) => { if (e.target !== slider) render(); });
  new ResizeObserver(render).observe(stage);
  render();
})();
