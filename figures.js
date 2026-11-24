// ==========================================================================
// TRÌNH HIỂN THỊ ATLAS HÌNH VẼ, SƠ ĐỒ & TIÊU BẢN MÔ HỌC CHÚ THÍCH TƯƠNG TÁC
// Gộp HISTO_FIGURES_1 (Biểu mô) & HISTO_FIGURES_2 (Mô liên kết, Sụn, Xương)
// ==========================================================================

window.HistoFigures = {
  getAll() {
    if (!window.HISTO_FIGURES) {
      window.HISTO_FIGURES = [
        ...(window.HISTO_FIGURES_1 || []),
        ...(window.HISTO_FIGURES_2 || [])
      ];
    }
    return window.HISTO_FIGURES;
  },

  getByLesson(lessonId) {
    return this.getAll().filter((f) => f.lessonId === lessonId);
  },

  renderLessonFigures(lessonId, container) {
    if (!container) return;
    const figs = this.getByLesson(lessonId);
    if (!figs.length) {
      container.innerHTML = `<div class="callout">Đang cập nhật hình minh họa cho bài học này.</div>`;
      return;
    }
    container.innerHTML = figs.map((f) => this.renderFigureCardHtml(f)).join("");
  },

  renderFigureCardHtml(fig) {
    const typeLabel =
      fig.kind === "micrograph"
        ? "🔬 Ảnh Tiêu bản Thật"
        : fig.kind === "hybrid"
        ? "🔬+📐 Tiêu bản & Sơ đồ Tái tạo"
        : "📐 Sơ đồ Tái tạo SVG";

    const stainHtml = fig.stain ? `<span class="stain-badge">🎨 ${fig.stain}</span>` : "";

    return `
      <article class="figure-card" id="figcard_${fig.id}">
        <div class="figure-card-top">
          <div>
            <div class="fig-badge-row">
              <span class="fig-num-badge">${fig.code} • tr. ${fig.page}</span>
              <span class="fig-type-badge">${typeLabel}</span>
              ${stainHtml}
            </div>
            <h3 class="fig-title">${fig.title}</h3>
          </div>
          <div class="fig-actions">
            <button type="button" class="fig-mini-btn" id="figlblbtn_${fig.id}" onclick="App.toggleFigureLabels('${fig.id}')" title="Ẩn/hiện nhãn chữ để tự luyện nhận diện">🏷️ Ẩn nhãn</button>
            <button type="button" class="fig-mini-btn" onclick="App.openFigureLightbox('${fig.id}')" title="Phóng to toàn màn hình">🔍 Phóng to</button>
          </div>
        </div>
        ${this.renderFigureInnerHtml(fig, false)}
      </article>
    `;
  },

  renderFigureInnerHtml(fig, inLightbox = false) {
    let visualHtml = "";

    if (fig.panels && fig.panels.length > 0) {
      const colsHtml = fig.panels
        .map((p) => {
          const media = p.img
            ? `<img src="${p.img}" alt="${p.label}" loading="lazy" />`
            : p.svg || "";
          return `
            <div class="fig-subpanel">
              <div class="fig-subpanel-media">${media}</div>
              <div class="fig-subpanel-cap">
                <strong>${p.label}</strong>
                <span>${p.desc}</span>
              </div>
            </div>
          `;
        })
        .join("");
      visualHtml = `<div class="figure-visual-wrap"><div class="fig-multipanel">${colsHtml}</div></div>`;
    } else if (fig.img && fig.svg) {
      // Hybrid: real micrograph with interactive pins + companion schematic diagram side-by-side / stacked
      const pinsHtml = (fig.pins || [])
        .map(
          (pin, idx) => `
          <button type="button" class="hotspot-pin ${idx === 0 ? "active" : ""}" data-fig="${fig.id}" data-pin="${idx}" style="left:${pin.x}%;top:${pin.y}%;" onclick="App.activatePin('${fig.id}', ${idx})" aria-label="Chú thích ${idx + 1}: ${pin.label}">
            ${idx + 1}
            <span class="hotspot-tooltip">${pin.label}</span>
          </button>
        `
        )
        .join("");
      visualHtml = `
        <div class="figure-visual-wrap">
          <div class="fig-multipanel">
            <div class="fig-subpanel">
              <div class="hotspot-stage">
                <img src="${fig.img}" alt="${fig.title}" loading="lazy" />
                ${pinsHtml}
              </div>
              <div class="fig-subpanel-cap"><strong>🔬 Ảnh Tiêu bản Hiển vi</strong><span>${fig.imgCaption || "Ghim số trùng khớp với chú thích bên dưới."}</span></div>
            </div>
            <div class="fig-subpanel">
              <div class="hotspot-stage">${fig.svg}</div>
              <div class="fig-subpanel-cap"><strong>📐 Sơ đồ Tái tạo Chuẩn Giáo trình</strong><span>${fig.svgCaption || "Minh họa rõ cấu trúc từng lớp và thành phần."}</span></div>
            </div>
          </div>
        </div>
      `;
    } else if (fig.img) {
      const pinsHtml = (fig.pins || [])
        .map(
          (pin, idx) => `
          <button type="button" class="hotspot-pin ${idx === 0 ? "active" : ""}" data-fig="${fig.id}" data-pin="${idx}" style="left:${pin.x}%;top:${pin.y}%;" onclick="App.activatePin('${fig.id}', ${idx})" aria-label="Chú thích ${idx + 1}: ${pin.label}">
            ${idx + 1}
            <span class="hotspot-tooltip">${pin.label}</span>
          </button>
        `
        )
        .join("");
      visualHtml = `
        <div class="figure-visual-wrap">
          <div class="hotspot-stage">
            <img src="${fig.img}" alt="${fig.title}" loading="lazy" />
            ${pinsHtml}
          </div>
        </div>
      `;
    } else if (fig.svg) {
      const pinsHtml = (fig.pins || [])
        .filter((p) => p.x !== undefined && p.y !== undefined)
        .map(
          (pin, idx) => `
          <button type="button" class="hotspot-pin ${idx === 0 ? "active" : ""}" data-fig="${fig.id}" data-pin="${idx}" style="left:${pin.x}%;top:${pin.y}%;" onclick="App.activatePin('${fig.id}', ${idx})" aria-label="Chú thích ${idx + 1}: ${pin.label}">
            ${idx + 1}
            <span class="hotspot-tooltip">${pin.label}</span>
          </button>
        `
        )
        .join("");
      visualHtml = `
        <div class="figure-visual-wrap">
          <div class="hotspot-stage">
            ${fig.svg}
            ${pinsHtml}
          </div>
        </div>
      `;
    }

    const legendHtml = (fig.pins || []).length
      ? `<div class="figure-legend">
          ${fig.pins
            .map(
              (pin, idx) => `
              <div class="legend-item ${idx === 0 ? "active" : ""}" data-fig="${fig.id}" data-pin="${idx}" onclick="App.activatePin('${fig.id}', ${idx})">
                <span class="legend-num">${idx + 1}</span>
                <div><strong>${pin.label}:</strong> <span>${pin.detail}</span></div>
              </div>
            `
            )
            .join("")}
        </div>`
      : "";

    const decoderHtml = fig.decoder
      ? `<div class="figure-decoder"><strong>💡 Giải mã &amp; Mẹo nhận diện thi:</strong> ${fig.decoder}</div>`
      : "";

    const creditHtml = fig.credit
      ? `<div class="figure-credit"><span>📚 Đối chiếu: Giáo trình Trần Công Toại (${fig.code}, tr. ${fig.page})</span><span>📷 ${fig.credit}</span></div>`
      : `<div class="figure-credit"><span>📚 Tái tạo từ: Giáo trình Mô học PGS.TS. Trần Công Toại (${fig.code}, tr. ${fig.page})</span></div>`;

    return `${visualHtml}${legendHtml}${decoderHtml}${inLightbox ? creditHtml : creditHtml}`;
  }
};
