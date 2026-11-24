// ==========================================================================
// 8 HOẠT CẢNH MINH HỌA QUÁ TRÌNH MÔ HỌC TRỰC QUAN (ANIMATED SVG)
// Bổ sung trực quan tiến trình cho 8 bài học (KHÔNG thay thế lý thuyết chữ)
// ==========================================================================

window.ProcessAnimations = {
  timer: null,
  currentLessonId: null,
  currentStep: 0,
  isPlaying: false,

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  },

  specs: {
    // BÀI 1: NUÔI DƯỠNG QUA MÀNG ĐÁY & 6 LIÊN KẾT TẾ BÀO BIỂU MÔ
    1: {
      title: "🎬 Minh họa Nuôi dưỡng Biểu mô qua Màng đáy & Chuỗi Liên kết từ Đỉnh xuống Đáy",
      steps: [
        {
          name: "1. Khếch tán Dinh dưỡng qua Màng đáy (Biểu mô Vô mạch)",
          desc: "Biểu mô <strong>không có mạch máu</strong>; oxy và chất dinh dưỡng từ mao mạch mô liên kết đệm phía dưới thẩm thấu qua <strong>màng đáy</strong> để nuôi tế bào biểu mô.",
          highlight: "Biểu mô: 3 lá phôi • Không mạch • Tái tạo mạnh"
        },
        {
          name: "2. Vòng bịt (Tight junction) & Thể liên kết vòng ở Cực ngọn",
          desc: "Sát cực ngọn, <strong>vòng bịt</strong> may kín hai màng ngăn đại phân tử & ion rò rỉ qua khe gian bào; ngay dưới là <strong>thể liên kết vòng</strong> giữ vòng tròn cực ngọn.",
          highlight: "Ngăn rò rỉ giữa khoang ngoài và mô đệm"
        },
        {
          name: "3. Thể liên kết (Desmosome 200–500 nm) & Khớp mộng",
          desc: "Tấm bào tương đặc bầu dục (200–500 nm) neo chặt các <strong>siêu sợi keratin</strong> xuyên qua màng đan chéo nhau, kết hợp <strong>khớp mộng</strong> chống lực xé cơ học.",
          highlight: "Siêu sợi keratin = đặc trưng bào tương biểu mô"
        },
        {
          name: "4. Liên kết khe (Gap junction 1000 nm) Trao đổi Ion",
          desc: "Hai màng cách nhau <strong>2–3 nm</strong>, phức hợp <strong>connexon</strong> đóng mở chuyển ion và phân tử nhỏ (<strong>TLPT ≤ 2·10³</strong>) trực tiếp giữa hai tế bào (gặp ở mọi mô).",
          highlight: "Connexon • Khe 2–3 nm • Đường kính ~1000 nm"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. KHUẾCH TÁN QUA ĐÁY</text>
            <rect x="24" y="64" width="112" height="44" rx="6" fill="#ede9fe" stroke="#6d28d9"/>
            <text x="80" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95">TB Biểu mô (vô mạch)</text>
            <rect x="24" y="112" width="112" height="10" rx="3" fill="#0284c7"/>
            <rect x="24" y="130" width="112" height="32" rx="14" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="80" y="150" text-anchor="middle" font-size="9.8" font-weight="700" fill="#9f1239">Mao mạch Mô đệm</text>
            ${a0 ? `<circle cx="80" cy="128" r="5" fill="#16a34a"><animate attributeName="cy" values="136;86;136" dur="1.6s" repeatCount="indefinite"/></circle>` : ""}
            <text x="80" y="184" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Thẩm thấu qua màng đáy</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--teal-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--teal)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--teal)">2. VÒNG BỊT CỰC NGỌN</text>
            <rect x="184" y="64" width="46" height="86" fill="#e9d5ff" stroke="#7c3aed"/>
            <rect x="250" y="64" width="46" height="86" fill="#fce7f3" stroke="#db2777"/>
            <path d="M230 72 L250 72 M230 79 L250 79 M230 86 L250 86" stroke="#0f766e" stroke-width="4"/>
            <circle cx="240" cy="48" r="6" fill="#e11d48">
              ${a1 ? `<animate attributeName="cy" values="46;64;46" dur="1.2s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="240" y="170" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--teal)">Chặn đại phân tử &amp; ion</text>
            <text x="240" y="185" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">Dưới là Thể liên kết vòng</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--accent)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">3. DESMOSOME</text>
            <rect x="344" y="62" width="46" height="86" fill="#f5f3ff" stroke="#7c3aed"/>
            <rect x="410" y="62" width="46" height="86" fill="#fdf2f8" stroke="#db2777"/>
            <rect x="382" y="90" width="8" height="26" fill="#be123c"/>
            <rect x="410" y="90" width="8" height="26" fill="#be123c"/>
            <path d="M356 80 L384 98 M356 124 L384 108 M418 98 L446 80 M418 108 L446 124" stroke="#f59e0b" stroke-width="2.5">
              ${a2 ? `<animate attributeName="opacity" values="0.4;1;0.4" dur="1.1s" repeatCount="indefinite"/>` : ""}
            </path>
            <text x="400" y="170" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">200–500 nm • Keratin</text>
            <text x="400" y="185" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">+ Khớp mộng chống trượt</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--warning)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">4. LIÊN KẾT KHE</text>
            <rect x="504" y="62" width="46" height="86" fill="#fef3c7" stroke="#d97706"/>
            <rect x="570" y="62" width="46" height="86" fill="#fef3c7" stroke="#d97706"/>
            <rect x="546" y="95" width="28" height="18" rx="4" fill="#d97706"/>
            ${a3 ? `<circle cx="525" cy="104" r="4" fill="#16a34a"><animate attributeName="cx" values="522;598;522" dur="1.5s" repeatCount="indefinite"/></circle>` : ""}
            <text x="560" y="170" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--warning)">Khe 2–3 nm • Connexon</text>
            <text x="560" y="185" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">Chuyển ion TLPT ≤ 2·10³</text>
          </svg>
        `;
      }
    },

    // BÀI 2: ĐỔI HÌNH DẠNG & TÁI TẠO CÁC LỚP BIỂU MÔ PHỦ
    2: {
      title: "🎬 Minh họa Cơ chế Sừng hóa Da (5 Lớp) & Biến đổi Biểu mô Niệu khi Căng đầy",
      steps: [
        {
          name: "1. Lớp Đáy Sinh sản (Khối vuông tựa Màng đáy)",
          desc: "Ở cả biểu mô lát tầng sừng hóa (da) và không sừng hóa, 1 hàng tế bào <strong>lớp đáy khối vuông</strong> phân bào đẩy tế bào mới lên thay thế bề mặt.",
          highlight: "Tái tạo biểu mô phủ diễn ra liên tục từ lớp đáy"
        },
        {
          name: "2. Lớp Gai (Nhiều thể liên kết) & Lớp Hạt (Keratohyalin)",
          desc: "Tế bào lên trên thành đa diện nối chặt qua vô số <strong>desmosome dạng gai</strong>; tại da xuất hiện <strong>lớp hạt</strong> mang hạt keratohyalin ưa baz (<em>không sừng hóa thì không có lớp hạt!</em>).",
          highlight: "Câu 1 tr.32: Không sừng khác sừng ở KHÔNG có lớp hạt"
        },
        {
          name: "3. Lớp Bóng (Eleidin) & Lớp Sừng (Chết, Mất nhân)",
          desc: "Protein tơ trương lực kết hợp keratohyalin tạo <strong>hạt eleidin (lớp bóng)</strong>, rồi tế bào chết mất nhân hóa sừng ở <strong>lớp sừng</strong> chống thấm – chống bay hơi nước.",
          highlight: "Biểu mô lát tầng sừng hóa CHỈ gặp ở da"
        },
        {
          name: "4. Biểu mô Niệu (Đường dẫn tiểu): Rỗng vs Căng đầy",
          desc: "Khi bàng quang rỗng, tế bào bề mặt cực lớn phồng tròn ấn lõm cực đáy trên hàng <strong>tế bào hình vợt</strong>; khi căng đầy nước tiểu, lớp bề mặt <strong>bị ép dẹt</strong> mỏng lại.",
          highlight: "BM niệu: chỉ gặp ở đường dẫn tiểu"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. LỚP ĐÁY SINH SẢN</text>
            <rect x="24" y="120" width="112" height="32" fill="#ddd6fe" stroke="#6d28d9"/>
            <circle cx="48" cy="136" r="6" fill="#4c1d95"/><circle cx="80" cy="136" r="6" fill="#4c1d95"/><circle cx="112" cy="136" r="6" fill="#4c1d95"/>
            ${a0 ? `<path d="M80 116 L80 82" stroke="#16a34a" stroke-width="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/></path>` : ""}
            <text x="80" y="176" text-anchor="middle" font-size="9.5" fill="var(--text-main)">1 hàng khối vuông</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">2. LỚP GAI → HẠT</text>
            <rect x="184" y="96" width="112" height="40" fill="#fbcfe8" stroke="#be185d"/>
            <text x="240" y="120" text-anchor="middle" font-size="9.5" font-weight="700" fill="#831843">Lớp gai (Desmosome)</text>
            <rect x="184" y="64" width="112" height="28" fill="#c4b5fd" stroke="#5b21b6"/>
            <circle cx="204" cy="78" r="3" fill="#3b0764"/><circle cx="226" cy="74" r="3" fill="#3b0764"/><circle cx="256" cy="80" r="3" fill="#3b0764"/><circle cx="278" cy="76" r="3" fill="#3b0764"/>
            <text x="240" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Hạt Keratohyalin ưa baz</text>
            <text x="240" y="182" text-anchor="middle" font-size="9" fill="var(--text-muted)">(Không sừng: thiếu lớp này)</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">3. BÓNG → SỪNG</text>
            <rect x="344" y="96" width="112" height="24" fill="#fef08a" stroke="#ca8a04"/>
            <text x="400" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#854d0e">Lớp bóng (Eleidin)</text>
            <rect x="344" y="54" width="112" height="38" fill="#fed7aa" stroke="#c2410c"/>
            <line x1="352" y1="64" x2="448" y2="64" stroke="#9a3412"/><line x1="352" y1="74" x2="448" y2="74" stroke="#9a3412"/><line x1="352" y1="84" x2="448" y2="84" stroke="#9a3412"/>
            <text x="400" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--warning)">TB chết, mất nhân</text>
            <text x="400" y="182" text-anchor="middle" font-size="9" fill="var(--text-muted)">Chống thấm &amp; bốc hơi</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--info-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--info)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">4. BIỂU MÔ NIỆU</text>
            <ellipse cx="560" cy="84" rx="46" ry="18" fill="#bae6fd" stroke="#0284c7" stroke-width="2">
              ${a3 ? `<animate attributeName="ry" values="20;8;20" dur="2s" repeatCount="indefinite"/>` : ""}
            </ellipse>
            <path d="M530 140 L542 106 L554 140 Z M566 140 L578 106 L590 140 Z" fill="#ddd6fe" stroke="#6d28d9"/>
            <text x="560" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--info)">TB hình vợt + TB bề mặt</text>
            <text x="560" y="182" text-anchor="middle" font-size="9" fill="var(--text-muted)">Ép dẹt khi căng đầy</text>
          </svg>
        `;
      }
    },

    // BÀI 3: HÌNH THÀNH TUYẾN & 3 KIỂU CHẾ TIẾT
    3: {
      title: "🎬 Minh họa Phát triển Tuyến Ngoại/Nội tiết & 3 Kiểu Chế tiết",
      steps: [
        {
          name: "1. Biểu mô Phủ Lõm xuống Mô đệm",
          desc: "Cả tuyến ngoại tiết lẫn tuyến nội tiết đều khởi đầu từ một nụ <strong>biểu mô phủ lõm sâu xuống mô liên kết đệm</strong> bên dưới.",
          highlight: "Nguồn gốc chung từ biểu mô phủ"
        },
        {
          name: "2. Phân nhánh: Tuyến Ngoại tiết vs Tuyến Nội tiết",
          desc: "Nếu giữ ống nối lên bề mặt → <strong>Tuyến ngoại tiết</strong> (phần bài xuất + phần chế tiết). Nếu mất liên hệ bề mặt và ôm lấy mao mạch → <strong>Tuyến nội tiết</strong>.",
          highlight: "Nội tiết: Mất ống dẫn • Tiết thẳng vào máu"
        },
        {
          name: "3. Kiểu Toàn vẹn (Tụy) vs Bán hủy (Vú, Mồ hôi nách)",
          desc: "<strong>Toàn vẹn:</strong> xuất bào từ từ, tế bào nguyên vẹn. <strong>Bán hủy:</strong> chất tiết tích cực đỉnh và đứt cùng một phần bào tương đỉnh.",
          highlight: "Bán hủy = mất một phần bào tương cực đỉnh"
        },
        {
          name: "4. Kiểu Toàn hủy (Tuyến bã) & Tái tạo từ Đáy",
          desc: "Toàn bộ tế bào biến thành chất tiết và vỡ tan thải ra ngoài; tế bào gốc ở đáy <strong>gián phân</strong> liên tục để thay thế tế bào đã hủy.",
          highlight: "Toàn hủy = cả tế bào biến thành chất tiết"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. LÕM BIỂU MÔ</text>
            <path d="M24 72 L58 72 L64 132 C64 148 96 148 96 132 L102 72 L136 72" fill="#ede9fe" stroke="#6d28d9" stroke-width="2.5"/>
            <text x="80" y="176" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Ăn sâu xuống mô đệm</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">2. TÁCH 2 NHÁNH</text>
            <rect x="184" y="54" width="112" height="44" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
            <text x="240" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Ngoại tiết: Còn ống nối</text>
            <rect x="184" y="110" width="112" height="48" rx="6" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="240" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">Nội tiết: Đứt ống → Máu</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--teal-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--teal)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--teal)">3. TOÀN VẸN / BÁN HỦY</text>
            <rect x="346" y="76" width="44" height="58" rx="4" fill="#ccfbf1" stroke="#0f766e"/>
            <path d="M408 134 L408 82 Q430 96 452 82 L452 134 Z" fill="#fbcfe8" stroke="#be185d"/>
            ${a2 ? `<ellipse cx="430" cy="68" rx="12" ry="6" fill="#f472b6"><animate attributeName="cy" values="76;52;76" dur="1.4s" repeatCount="indefinite"/></ellipse>` : ""}
            <text x="400" y="168" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">Tụy (nguyên) vs Vú (đứt đỉnh)</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--danger)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">4. TOÀN HỦY (TUYẾN BÃ)</text>
            <circle cx="560" cy="96" r="24" fill="#fecdd3" stroke="#e11d48" stroke-dasharray="4,2">
              ${a3 ? `<animate attributeName="r" values="20;28;20" dur="1.3s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="560" y="150" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--danger)">Vỡ toàn bộ tế bào</text>
            <text x="560" y="168" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">Tế bào đáy gián phân thay</text>
          </svg>
        `;
      }
    },

    // BÀI 4: ĐÁP ỨNG ĐẠI THỰC BÀO – TƯƠNG BÀO – MASTO BÀO TRONG MÔ LIÊN KẾT
    4: {
      title: "🎬 Minh họa Mạng lưới Phòng vệ Mô Liên kết (Xuyên mạch – Trình diện KN – Tương bào – Dị ứng IgE)",
      steps: [
        {
          name: "1. Mono bào Xuyên mạch thành Đại thực bào Viêm",
          desc: "Mono bào trong mạch máu bám thành, thò chân giả xuyên qua kẽ tế bào nội mô vào mô liên kết cùng đại thực bào tại chỗ dọn sạch ổ viêm.",
          highlight: "Đại thực bào tại chỗ: Kupffer (gan), Bụi (phổi), Lách"
        },
        {
          name: "2. Phụ trợ Miễn dịch: Trình diện Kháng nguyên cho Lympho T hỗ trợ",
          desc: "Đại thực bào thực bào, tiêu hóa biến đổi kháng nguyên rồi trình diện lên bề mặt cho <strong>lympho bào T hỗ trợ</strong> nhận diện.",
          highlight: "Cầu nối giữa miễn dịch không đặc hiệu & đặc hiệu"
        },
        {
          name: "3. Tương bào Sản xuất Globulin Miễn dịch (IgE)",
          desc: "Thực hiện miễn dịch dịch thể: nhân tròn lệch 1 bên, chất nhiễm sắc bám màng nhân, bào tương ái kiềm giàu <strong>LNBH &amp; Golgi</strong> tổng hợp kháng thể.",
          highlight: "Tương bào tổng hợp globulin miễn dịch"
        },
        {
          name: "4. Masto bào Phóng hạt Dị ứng khi gặp Kháng nguyên lần 2",
          desc: "Kháng thể <strong>IgE</strong> gắn sẵn trên thụ thể bề mặt masto bào (lần 1); khi tiếp xúc kháng nguyên lần 2 sẽ phóng thích <strong>histamin, protease, ECF-A, heparin</strong>.",
          highlight: "Histamin gây giãn mạch, tăng tính thấm, co cơ trơn"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--danger)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">1. XUYÊN MẠCH</text>
            <rect x="24" y="60" width="112" height="28" rx="8" fill="#fecdd3" stroke="#e11d48"/>
            <circle cx="80" cy="86" r="10" fill="#f59e0b" stroke="#9a3412">
              ${a0 ? `<animate attributeName="cy" values="72;124;72" dur="1.6s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="80" y="158" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">Mono bào → Ổ viêm</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--warning)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">2. TRÌNH DIỆN KN</text>
            <circle cx="216" cy="96" r="24" fill="#fde68a" stroke="#d97706"/>
            <circle cx="268" cy="96" r="18" fill="#ddd6fe" stroke="#6d28d9"/>
            <text x="268" y="100" text-anchor="middle" font-size="10" font-weight="800" fill="#4c1d95">Th</text>
            <text x="240" y="158" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">Đại thực bào ↔ Lympho Th</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--primary)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">3. TƯƠNG BÀO → IgE</text>
            <circle cx="400" cy="96" r="26" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/>
            <circle cx="388" cy="94" r="9" fill="#3b0764"/>
            <text x="400" y="158" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--primary)">Nhân lệch • LNBH → Kháng thể</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--accent)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">4. MASTO BÀO DỊ ỨNG</text>
            <circle cx="560" cy="96" r="24" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
            ${a3 ? `<circle cx="534" cy="70" r="4" fill="#6d28d9"><animate attributeName="r" values="2;6;2" dur="1s" repeatCount="indefinite"/></circle><circle cx="586" cy="74" r="4" fill="#6d28d9"><animate attributeName="r" values="2;6;2" dur="1s" repeatCount="indefinite"/></circle>` : ""}
            <text x="560" y="158" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Phóng Histamin, ECF-A, Heparin</text>
          </svg>
        `;
      }
    },

    // BÀI 5: CHUỖI TỔNG HỢP COLLAGEN TỪ LNBH ĐẾN VI SỢI VÂN 64 nm
    5: {
      title: "🎬 Minh họa 4 Chặng Sinh tổng hợp Collagen (LNBH → Golgi → Ngoại bào → Vi sợi 64 nm)",
      steps: [
        {
          name: "Chặng 1: Ribosom / Lưới Nội bào Hạt → Chuỗi tiền alpha",
          desc: "Nguyên bào sợi tổng hợp riêng rẽ các <strong>chuỗi tiền alpha</strong> (~1000 acid amin) có gắn thêm đoạn peptide ngắn không xoắn ở hai đầu.",
          highlight: "Trong LNBH mới chỉ có chuỗi tiền alpha đơn lẻ"
        },
        {
          name: "Chặng 2: Bộ Golgi → Ghép 3 chuỗi thành Procollagen",
          desc: "Biến đổi hóa học và kết hợp 3 chuỗi tiền alpha tạo <strong>phân tử procollagen</strong>. Nó CHƯA tự kết tụ thành sợi được vì 2 đầu peptide ngắn ức chế.",
          highlight: "Procollagen không tự kết tụ bên trong tế bào"
        },
        {
          name: "Chặng 3: Túi chế tiết → Cắt peptide ở Ngoại bào → Tropocollagen",
          desc: "Xuất bào ra khoảng gian bào, procollagen bị cắt bỏ 2 đoạn peptide ngắn biến thành <strong>tropocollagen</strong> (đường kính <strong>1,5 nm</strong>, dài <strong>280 nm</strong>).",
          highlight: "Không liên quan Không bào tiêu hóa!"
        },
        {
          name: "Chặng 4: Tự lắp ráp thành Vi sợi Collagen vân 64 nm",
          desc: "Các phân tử tropocollagen xếp lệch nhau theo chu kỳ <strong>64 nm</strong> (khoảng trống <strong>30 nm</strong>) tạo băng tối – sáng đặc trưng dưới KHV điện tử.",
          highlight: "Vân sáng – tối chu kỳ 64 nm"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. LNBH (RIBOSOM)</text>
            <path d="M40 80 Q80 65 120 80 M40 100 Q80 85 120 100 M40 120 Q80 105 120 120" stroke="#6d28d9" stroke-width="3" fill="none"/>
            <text x="80" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--primary)">Chuỗi tiền alpha đơn lẻ</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">2. BỘ GOLGI</text>
            <path d="M196 95 Q240 75 284 95" stroke="#be185d" stroke-width="5" fill="none"/>
            <circle cx="194" cy="95" r="5" fill="#dc2626"/><circle cx="286" cy="95" r="5" fill="#dc2626"/>
            <text x="240" y="142" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Procollagen (còn 2 đầu)</text>
            <text x="240" y="160" text-anchor="middle" font-size="9" fill="var(--text-muted)">Ức chế kết tụ nội bào</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">3. NGOẠI BÀO CẮT 2 ĐẦU</text>
            <line x1="358" y1="95" x2="442" y2="95" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
            <text x="400" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--warning)">Tropocollagen (1,5 × 280 nm)</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--teal-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--teal)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--teal)">4. VI SỢI VÂN 64 nm</text>
            <rect x="506" y="76" width="108" height="32" fill="#0f766e"/>
            <rect x="524" y="76" width="10" height="32" fill="#ccfbf1"/><rect x="554" y="76" width="10" height="32" fill="#ccfbf1"/><rect x="584" y="76" width="10" height="32" fill="#ccfbf1"/>
            <text x="560" y="145" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">Băng tối – sáng 64 nm</text>
          </svg>
        `;
      }
    },

    // BÀI 6: MẠNG KÉP MÔ LƯỚI & BIỆT HÓA MÔ MỠ TRẮNG VS NÂU
    6: {
      title: "🎬 Minh họa Mạng kép Mô Lưới & Chuyển hóa Mô Mỡ Trắng – Mô Mỡ Nâu",
      steps: [
        {
          name: "1. Mô Lưới: Mạng Sợi Lưới (Collagen III) Ngấm bạc Đen",
          desc: "Mô lưới chỉ có 2 thành phần (không chất căn bản). Khi ngấm bạc, <strong>sợi lưới bắt màu đen</strong> tạo khung đỡ thứ nhất ở hạch, lách, tủy xương.",
          highlight: "Mô lưới: KHÔNG có chất căn bản!"
        },
        {
          name: "2. Mô Lưới: Mạng Tế bào Lưới Hình sao Móc chồng lên",
          desc: "Khi nhuộm thường (H&amp;E), các <strong>tế bào lưới hình sao</strong> nối nhánh thành mạng thứ hai móc chồng lên mạng sợi lưới, nâng đỡ tế bào máu trong mắt lưới.",
          highlight: "2 mạng lưới móc chồng lên nhau"
        },
        {
          name: "3. Hình thành Tế bào Mỡ Trắng (Nhiều giọt nhỏ → 1 giọt lớn)",
          desc: "Nhiều giọt lipid nhỏ phân tán hòa nhập thành <strong>1 giọt lipid lớn duy nhất</strong> choáng hết bào tương, đẩy nhân ép dẹt sát màng; bọc ngoài bởi collagen týp III.",
          highlight: "Mỡ trắng: Dự trữ năng lượng & cách nhiệt"
        },
        {
          name: "4. Mô Mỡ Nâu (Nhiều giọt nhỏ + Ty thể + Mao mạch phong phú)",
          desc: "Các giọt mỡ giữ dạng nhiều giọt nhỏ; giàu mao mạch và ty thể tạo màu nâu sinh nhiệt mạnh, có nhiều ở <strong>trẻ sơ sinh</strong>.",
          highlight: "Mỡ nâu nhiều ở trẻ sơ sinh chống lạnh"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. NGẤM BẠC SỢI LƯỚI</text>
            <path d="M28 66 L132 134 M132 66 L28 134 M80 54 L80 144 M32 100 L128 100" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="58" cy="88" r="7" fill="#e11d48"/><circle cx="102" cy="116" r="7" fill="#e11d48"/>
            <text x="80" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--primary)">Collagen týp III màu đen</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">2. MẠNG TẾ BÀO LƯỚI</text>
            <polygon points="240,74 248,94 270,96 252,110 260,130 240,118 220,130 228,110 210,96 232,94" fill="#f472b6" stroke="#9d174d"/>
            <text x="240" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">TB hình sao chồng lên sợi</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">3. MỠ TRẮNG (1 GIỌT)</text>
            <circle cx="400" cy="100" r="34" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <circle cx="400" cy="100" r="28" fill="#ffffff"/>
            <ellipse cx="430" cy="100" rx="3" ry="10" fill="#713f12"/>
            <text x="400" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--warning)">Giọt lớn ép dẹt nhân</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--danger)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">4. MỠ NÂU (SƠ SINH)</text>
            <circle cx="560" cy="100" r="34" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
            <circle cx="560" cy="100" r="9" fill="#7c2d12"/>
            <circle cx="542" cy="84" r="6" fill="#fff"/><circle cx="578" cy="84" r="6" fill="#fff"/><circle cx="542" cy="116" r="6" fill="#fff"/><circle cx="578" cy="116" r="6" fill="#fff"/>
            <text x="560" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">Nhiều giọt + Ty thể + Mạch</text>
          </svg>
        `;
      }
    },

    // BÀI 7: HAI KIỂU SINH SẢN SỤN (ĐẮP THÊM & GIAN BÀO VÒNG/TRỤC)
    7: {
      title: "🎬 Minh họa Tăng trưởng Mô Sụn: Đắp thêm từ Màng sụn vs Gian bào Vòng & Trục",
      steps: [
        {
          name: "1. Sinh sản Đắp thêm từ Lớp trong Màng sụn",
          desc: "Tế bào trung mô ở lớp trong màng sụn biệt hóa thành <strong>nguyên bào sụn</strong>, tiết chất nền sụn rồi tự vùi vào ổ sụn làm sụn dày lên từ ngoại vi.",
          highlight: "Sụn khớp & Sụn xơ KHÔNG có màng sụn"
        },
        {
          name: "2. Sinh sản Gian bào Kiểu Vòng (Đổi mặt phẳng phân chia)",
          desc: "Tế bào sụn phân chia nhiều lần với <strong>mặt phẳng phân chia thay đổi</strong> tạo nhóm tế bào sụn cùng nguồn xếp thành vòng trong 1 ổ sụn, quanh có cầu sụn đậm.",
          highlight: "Cầu sụn giàu chondroitin sulfat (40% trọng lượng khô)"
        },
        {
          name: "3. Sinh sản Gian bào Kiểu Trục (Mặt phẳng cố định)",
          desc: "Tế bào sụn chia nhiều lần với <strong>mặt phẳng phân chia không đổi</strong> tạo cột tế bào sụn cùng nguồn xếp hàng dọc (thấy ở sụn tiếp hợp!).",
          highlight: "Đóng vai trò kéo dài xương trong sụn tiếp hợp"
        },
        {
          name: "4. Miễn dịch & Lão hóa Sụn",
          desc: "Không mạch máu; phân tử kháng nguyên lớn không thấm vào nên <strong>ghép sụn dễ dàng</strong>. Khi già: proteoglycan giảm → giảm ưa nước, tăng glycogen, có thể ngấm canxi (trừ sụn chun).",
          highlight: "Sụn chun KHÔNG bao giờ vôi hóa"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--accent)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">1. ĐẮP THÊM</text>
            <rect x="24" y="54" width="22" height="100" fill="#fbcfe8" stroke="#be185d"/>
            <circle cx="84" cy="84" r="14" fill="#ddd6fe" stroke="#6d28d9"/><circle cx="84" cy="124" r="14" fill="#ddd6fe" stroke="#6d28d9"/>
            ${a0 ? `<path d="M48 104 L70 104" stroke="#be185d" stroke-width="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/></path>` : ""}
            <text x="80" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Từ lớp trong màng sụn</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--primary)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">2. GIAN BÀO VÒNG</text>
            <circle cx="240" cy="104" r="34" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
            <circle cx="226" cy="92" r="9" fill="#5b21b6"/><circle cx="254" cy="92" r="9" fill="#5b21b6"/>
            <circle cx="226" cy="116" r="9" fill="#5b21b6"/><circle cx="254" cy="116" r="9" fill="#5b21b6"/>
            <text x="240" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--primary)">Đổi mặt phẳng chia</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--teal-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--teal)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--teal)">3. GIAN BÀO TRỤC</text>
            <rect x="382" y="54" width="36" height="104" rx="16" fill="#ccfbf1" stroke="#0f766e"/>
            <circle cx="400" cy="70" r="8" fill="#0f766e"/><circle cx="400" cy="92" r="8" fill="#0f766e"/><circle cx="400" cy="114" r="8" fill="#0f766e"/><circle cx="400" cy="136" r="8" fill="#0f766e"/>
            <text x="400" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">Mặt phẳng không đổi</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--info-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--info)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">4. GHÉP &amp; LÃO HÓA</text>
            <circle cx="560" cy="96" r="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <text x="560" y="100" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0369a1">Chặn protein KN</text>
            <text x="560" y="168" text-anchor="middle" font-size="9.3" font-weight="700" fill="var(--info)">Già: ↓Ưa nước, ↑Glycogen</text>
          </svg>
        `;
      }
    },

    // BÀI 8: TU SỬA HAVERS & QUÁ TRÌNH CANXI HÓA LÁ XƯƠNG
    8: {
      title: "🎬 Minh họa Tu sửa Havers (Xương Nguyên phát → Thứ phát) & Ngấm Canxi",
      steps: [
        {
          name: "Bước 1: Hủy cốt bào Khoét Hốc Tiêu xương (Hình 5.9 D)",
          desc: "Hủy cốt bào đa nhân (từ mono bào tủy xương) tiết <strong>H⁺</strong> hòa tan hydroxyapatite và enzym hủy collagen tạo đường hầm (hốc tiêu xương).",
          highlight: "Hủy cốt bào giải phóng proton H⁺ + Enzym"
        },
        {
          name: "Bước 2: Mạch máu & Trung mô vào Đắp Viền Tiền cốt (Hình 5.9 C)",
          desc: "Mạch máu chui vào hốc kéo theo tế bào trung mô biến thành <strong>tạo cốt bào</strong>, đắp lá xương đầu tiên từ ngoài vào gọi là <strong>viền tiền cốt</strong> (chất dạng xương).",
          highlight: "Đắp từ NGOÀI vào TRONG hốc tiêu xương"
        },
        {
          name: "Bước 3: Đắp Lá Đồng tâm & Thành lập Đường Xi măng (Hình 5.9 B→A)",
          desc: "Các lá xương tiếp theo (dày ~7 µm) đắp đồng tâm thu hẹp ống Havers; ranh giới ngoài cùng là <strong>đường xi măng</strong> (vết tích vách hốc tiêu xương).",
          highlight: "Lá ngoài vôi hóa đầy đủ; lá trong cùng là chất dạng xương"
        },
        {
          name: "Bước 4: Ngấm Canxi tạo Tinh thể Hydroxyapatite (Tạo nhân & Bồi tụ)",
          desc: "Ca²⁺ + PO₄³⁻ → muối vô định hình <code>Ca₉(PO₄)₆</code> → tinh thể <code>Ca₅(PO₄)₃OH</code> qua tạo nhân &amp; bồi tụ (tiêu thụ 75% muối ngay ban đầu).",
          highlight: "Vô cơ 70% • Hữu cơ 30% (95% collagen týp I)"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="14" width="144" height="185" rx="12" fill="${a0 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--danger)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">1. HỐC TIÊU XƯƠNG (D)</text>
            <circle cx="80" cy="100" r="34" fill="#fecdd3" stroke="#e11d48" stroke-dasharray="5,3">
              ${a0 ? `<animate attributeName="r" values="26;36;26" dur="1.5s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="80" y="104" text-anchor="middle" font-size="9.5" font-weight="800" fill="#9f1239">Hủy cốt bào H⁺</text>
            <text x="80" y="172" text-anchor="middle" font-size="9.3" fill="var(--danger)">Khoét đường hầm</text>

            <rect x="168" y="14" width="144" height="185" rx="12" fill="${a1 ? "var(--info-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--info)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">2. VIỀN TIỀN CỐT (C)</text>
            <circle cx="240" cy="100" r="34" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
            <circle cx="240" cy="100" r="22" fill="#fff"/>
            <circle cx="240" cy="100" r="7" fill="#dc2626"/>
            <text x="240" y="172" text-anchor="middle" font-size="9.3" font-weight="700" fill="var(--info)">Mạch máu + Tạo cốt bào</text>

            <rect x="328" y="14" width="144" height="185" rx="12" fill="${a2 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--primary)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="400" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">3. HAVERS HOÀN CHỈNH (A)</text>
            <circle cx="400" cy="100" r="34" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/>
            <circle cx="400" cy="100" r="24" fill="#ede9fe" stroke="#6d28d9"/>
            <circle cx="400" cy="100" r="14" fill="#fff" stroke="#6d28d9"/>
            <circle cx="400" cy="100" r="6" fill="#dc2626"/>
            <text x="400" y="172" text-anchor="middle" font-size="9.3" font-weight="700" fill="var(--primary)">Đường xi măng bao ngoài</text>

            <rect x="488" y="14" width="144" height="185" rx="12" fill="${a3 ? "var(--teal-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--teal)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="560" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="var(--teal)">4. HYDROXYAPATITE</text>
            <rect x="506" y="70" width="108" height="32" rx="6" fill="#ccfbf1" stroke="#0f766e"/>
            <text x="560" y="90" text-anchor="middle" font-size="10" font-weight="800" fill="#115e59">Ca₉(PO₄)₆ → Ca₅(PO₄)₃OH</text>
            <text x="560" y="138" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">Tạo nhân + Bồi tụ (75%)</text>
            <text x="560" y="172" text-anchor="middle" font-size="9" fill="var(--text-muted)">Osteonectin &amp; Osteocalcin</text>
          </svg>
        `;
      }
    }
  },

  render(lessonId, container) {
    this.stopTimer();
    const spec = this.specs[lessonId];
    if (!spec || !container) return;
    this.currentLessonId = lessonId;
    this.currentStep = 0;
    this.mount(container, spec);
  },

  mount(container, spec) {
    const step = spec.steps[this.currentStep];
    const buttonsHtml = spec.steps
      .map(
        (st, idx) => `
      <button type="button" class="pill-btn ${idx === this.currentStep ? "active" : ""}" onclick="ProcessAnimations.goTo(${idx})">
        ${idx + 1}. ${st.name.replace(/^\d+\.\s*/, "").split("–")[0].split(":")[0]}
      </button>`
      )
      .join("");

    container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="sim-badge" style="background:var(--teal);">🎬 Minh họa Quá trình Mô học Trực quan</span>
            <h3 style="font-size:17.5px;font-weight:800;margin-top:6px;color:var(--text-main);">${spec.title}</h3>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.prev()">⏮️ Trước</button>
            <button type="button" class="btn btn-primary" style="min-height:36px;padding:6px 12px;font-size:12.5px;" id="procPlayBtn" onclick="ProcessAnimations.togglePlay()">
              ${this.isPlaying ? "⏸️ Tạm dừng" : "▶️ Chạy minh họa"}
            </button>
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.next()">Tiếp ⏭️</button>
          </div>
        </div>

        <div class="pill-btn-group">${buttonsHtml}</div>

        <div class="svg-stage" style="margin:12px 0;">
          ${spec.renderSvg(this.currentStep)}
        </div>

        <div class="callout pearl" style="margin:0;">
          <div class="callout-title" style="justify-content:space-between;">
            <span>📌 ${step.name}</span>
            <span class="tag-pill" style="background:var(--primary);color:#fff;">💡 ${step.highlight}</span>
          </div>
          <p style="margin-top:4px;">${step.desc}</p>
        </div>
      </div>
    `;
  },

  goTo(idx) {
    const spec = this.specs[this.currentLessonId];
    const el = document.getElementById("procAnimContainer");
    if (!spec || !el) return;
    this.currentStep = (idx + spec.steps.length) % spec.steps.length;
    this.mount(el, spec);
  },

  next() {
    this.goTo(this.currentStep + 1);
  },

  prev() {
    this.goTo(this.currentStep - 1);
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopTimer();
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "▶️ Chạy minh họa";
    } else {
      this.isPlaying = true;
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "⏸️ Tạm dừng";
      this.timer = setInterval(() => {
        if (!document.getElementById("procAnimContainer")) {
          this.stopTimer();
          return;
        }
        this.next();
      }, 3200);
    }
  }
};
