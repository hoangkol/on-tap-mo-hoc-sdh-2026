// ==========================================================================
// THƯ VIỆN HÌNH VẼ, SƠ ĐỒ & TIÊU BẢN PHẦN 2: CHƯƠNG 3, 4, 5 (36 HÌNH)
// Đầy đủ Hình 3.1–3.20 (Mô liên kết, Lưới, Mỡ), Hình 4.1–4.4 (Mô sụn),
// Hình 5.1–5.12 & Biểu đồ tr. 63 (Mô xương) – Giáo trình Trần Công Toại
// ==========================================================================

window.HISTO_FIGURES_2 = [
  // ==================== CHƯƠNG 3: MÔ LIÊN KẾT (20 HÌNH) ====================
  {
    id: "h_3_1",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.1",
    page: 35,
    kind: "svg",
    stain: "Sơ đồ tổng hợp mô liên kết",
    title: "Sơ đồ cấu tạo mô liên kết (Tế bào – Sợi – Mao mạch)",
    svg: `<svg viewBox="0 0 540 280" class="fig-svg" style="background:#fefce8">
      <!-- Elastic fibers (straight dark teal lines) -->
      <line x1="20" y1="50" x2="520" y2="230" stroke="#0f766e" stroke-width="2.5"/>
      <line x1="40" y1="245" x2="480" y2="35" stroke="#0f766e" stroke-width="2.5"/>
      <line x1="160" y1="10" x2="360" y2="270" stroke="#0f766e" stroke-width="2"/>
      <!-- Collagen fiber bundles (pink striated bands) -->
      <path d="M10 150 Q190 120 530 175" stroke="#f472b6" stroke-width="14" opacity="0.65" fill="none"/>
      <path d="M120 15 Q210 140 165 270" stroke="#f472b6" stroke-width="11" opacity="0.6" fill="none"/>
      <!-- Capillary with Endothelial cell + Pericyte -->
      <path d="M25 78 Q120 35 230 92 T475 72" stroke="#93c5fd" stroke-width="18" fill="none"/>
      <path d="M25 78 Q120 35 230 92 T475 72" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="10,6" fill="none"/>
      <ellipse cx="90" cy="48" rx="14" ry="5" fill="#16a34a" stroke="#14532d"/>
      <text x="58" y="34" fill="#15803d" font-size="10.5" font-weight="800" class="svg-auto-label">TB nội mô</text>
      <path d="M350 75 Q372 52 396 74" stroke="#7c3aed" stroke-width="5" fill="none"/>
      <text x="410" y="54" fill="#6d28d9" font-size="10.5" font-weight="800" class="svg-auto-label">Chu bào</text>
      <!-- Adipocytes -->
      <circle cx="310" cy="36" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <ellipse cx="324" cy="24" rx="4" ry="8" transform="rotate(40 324 24)" fill="#713f12"/>
      <text x="348" y="32" fill="#854d0e" font-size="10.5" font-weight="800" class="svg-auto-label">TB mỡ</text>
      <!-- Fibroblast -->
      <path d="M210 140 Q260 122 315 142 Q265 156 210 140 Z" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
      <ellipse cx="262" cy="140" rx="11" ry="5" fill="#881337"/>
      <text x="262" y="122" text-anchor="middle" fill="#9f1239" font-size="10.5" font-weight="800" class="svg-auto-label">Nguyên bào sợi</text>
      <!-- Macrophage -->
      <path d="M78 138 Q62 118 92 108 Q122 115 112 145 Q88 158 78 138 Z" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
      <circle cx="94" cy="128" r="7" fill="#7c2d12"/>
      <text x="92" y="172" text-anchor="middle" fill="#9a3412" font-size="10.5" font-weight="800" class="svg-auto-label">Đại thực bào</text>
      <!-- Plasma cell -->
      <circle cx="360" cy="198" r="18" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="352" cy="194" r="7" fill="#4c1d95"/>
      <text x="360" y="232" text-anchor="middle" fill="#5b21b6" font-size="10.5" font-weight="800" class="svg-auto-label">Tương bào</text>
      <!-- Mast cell -->
      <circle cx="195" cy="222" r="20" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
      <circle cx="195" cy="222" r="6" fill="#831843"/>
      <circle cx="184" cy="212" r="2.2" fill="#5b21b6"/><circle cx="204" cy="212" r="2.2" fill="#5b21b6"/>
      <circle cx="185" cy="232" r="2.2" fill="#5b21b6"/><circle cx="205" cy="230" r="2.2" fill="#5b21b6"/>
      <text x="195" y="256" text-anchor="middle" fill="#9d174d" font-size="10.5" font-weight="800" class="svg-auto-label">Masto bào</text>
      <!-- Fibers label -->
      <text x="455" y="156" fill="#be185d" font-size="10.5" font-weight="800" class="svg-auto-label">Sợi collagen</text>
      <text x="455" y="242" fill="#0f766e" font-size="10.5" font-weight="800" class="svg-auto-label">Sợi chun</text>
    </svg>`,
    pins: [
      { x: 48, y: 50, label: "Nguyên bào sợi & Sợi collagen/chun", detail: "Nguyên bào sợi hình thoi tổng hợp bó sợi collagen (hồng vân) và sợi chun mảnh phân nhánh." },
      { x: 18, y: 46, label: "Đại thực bào & Mao mạch (TB nội mô + Chu bào)", detail: "Đại thực bào viền không đều thực bào dọn dẹp; chu bào ôm ngoài mao mạch điều chỉnh lòng mạch." },
      { x: 66, y: 72, label: "Tương bào & Masto bào", detail: "Tương bào nhân lệch tạo kháng thể; masto bào >20 µm nhiều hạt ái kiềm chứa histamin, heparin quanh mạch máu." }
    ],
    decoder: "Bức tranh toàn cảnh Hình 3.1 giúp ghi nhớ mô liên kết có đầy đủ 3 thành phần: tế bào nằm rải rác, hai loại sợi (collagen & chun) và chất căn bản ưa nước nằm giữa, cùng mao mạch nuôi dưỡng."
  },
  {
    id: "h_3_2",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.2",
    page: 35,
    kind: "svg",
    stain: "Sơ đồ vi thể",
    title: "Tế bào trung mô (Tế bào gốc đa năng)",
    svg: `<svg viewBox="0 0 480 210" class="fig-svg" style="background:#fdf4ff">
      <!-- Delicate mesenchymal network -->
      <path d="M40 60 Q110 85 170 65 Q240 45 310 82 Q380 105 445 72" stroke="#a21caf" stroke-width="2" fill="none"/>
      <path d="M55 155 Q135 128 215 152 Q295 176 385 135 Q435 120 460 148" stroke="#a21caf" stroke-width="2" fill="none"/>
      <path d="M170 65 L215 152 M310 82 L270 154 M110 80 L90 144" stroke="#c026d3" stroke-width="1.5" fill="none"/>
      <!-- Spindle / stellate mesenchymal cells -->
      ${[[110,78],[240,56],[355,88],[135,136],[265,152],[405,132]].map(([x,y]) => `
        <path d="M${x-26} ${y} Q${x} ${y-14} ${x+26} ${y} Q${x} ${y+14} ${x-26} ${y} Z" fill="#f5d0fe" stroke="#86198f" stroke-width="1.8"/>
        <ellipse cx="${x}" cy="${y}" rx="9" ry="4.5" fill="#4a044e"/>
      `).join("")}
      <text x="240" y="28" text-anchor="middle" fill="#86198f" font-size="12" font-weight="800">LƯỚI TẾ BÀO TRUNG MÔ (Hình thoi / Hình sao nối nhánh)</text>
      <text x="240" y="196" text-anchor="middle" fill="#701a75" font-size="11" font-weight="700" class="svg-auto-label">Nhân bầu dục nằm giữa • Tỷ lệ nhân/bào tương &gt; 1 • Biệt hóa đa năng</text>
    </svg>`,
    pins: [
      { x: 24, y: 38, label: "Tế bào trung mô hình thoi/sao", detail: "Kích thước nhỏ, nhân bầu dục giữa tế bào, bào tương ít tỏa nhánh mảnh nối với nhau thành mạng lưới trung mô." },
      { x: 55, y: 72, label: "Chức năng tế bào gốc đa năng", detail: "Rất nhiều ở phôi thai và còn sót lại ở người trưởng thành; biệt hóa thành nguyên bào sợi và các TB liên kết khác." }
    ],
    decoder: "Câu tự lượng giá 5 (tr.45): Tế bào được gọi là 'tế bào đa năng' chính là Tế bào trung mô!"
  },
  {
    id: "h_3_3",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.3",
    page: 35,
    kind: "micrograph",
    stain: "H&E (Mô liên kết đặc có định hướng)",
    title: "Tế bào sợi & Bó sợi collagen",
    img: "assets/histology/dense_regular.jpg",
    credit: "Echinaceapallida (CC BY-SA 4.0)",
    pins: [
      { x: 48, y: 45, label: "Tế bào sợi (Fibrocyte)", detail: "Là nguyên bào sợi trưởng thành, nhân thuôn dẹt kéo dài nằm ép dọc giữa các bó sợi collagen; cơ sở cấu tạo vết sẹo." },
      { x: 30, y: 65, label: "Bó sợi collagen lượn sóng song song", detail: "Các bó sợi collagen týp I dày màu hồng xếp song song nhau chịu lực kéo." }
    ],
    decoder: "Phân biệt: Nguyên bào sợi non có bào tương ít ái kiềm nhẹ giàu LNBH hoạt động mạnh đổi mới chất nền; Tế bào sợi là dạng trưởng thành nhân dẹt sẫm màu nằm ép giữa bó sợi (gân, cơ, sẹo)."
  },
  {
    id: "h_3_4",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.4",
    page: 36,
    kind: "hybrid",
    stain: "H&E (Phổi) & Sơ đồ cấu trúc",
    title: "Đại thực bào (Tế bào bụi ở phổi & Sơ đồ siêu cấu trúc)",
    img: "assets/histology/macrophage_lung.jpg",
    imgCaption: "Đại thực bào phế nang ('tế bào bụi' ở phổi) chứa đầy hạt bụi than đen thực bào trong bào tương.",
    credit: "Yale Rosen (CC BY-SA 2.0)",
    svg: `<svg viewBox="0 0 380 210" class="fig-svg" style="background:#fffbeb">
      <text x="190" y="22" text-anchor="middle" fill="#9a3412" font-size="12" font-weight="800">ĐẶC ĐIỂM NHẬN DIỆN ĐẠI THỰC BÀO</text>
      <path d="M95 110 C82 72 130 52 162 66 C188 48 242 54 258 84 C290 92 288 136 254 148 C236 178 176 174 152 152 C115 168 85 144 95 110 Z" fill="#fde68a" stroke="#b45309" stroke-width="2.5"/>
      <!-- Indented / kidney nucleus -->
      <path d="M140 96 C128 84 148 70 165 82 C178 90 174 122 156 122 C142 122 146 106 140 96 Z" fill="#78350f"/>
      <!-- Phagocytic vacuoles & heterogeneous inclusions -->
      <circle cx="215" cy="96" r="14" fill="#fff" stroke="#b45309" stroke-width="2"/>
      <rect x="208" y="92" width="14" height="6" fill="#0f172a"/>
      <circle cx="204" cy="132" r="9" fill="#92400e"/>
      <circle cx="238" cy="122" r="7" fill="#dc2626"/>
      <circle cx="178" cy="140" r="6" fill="#334155"/>
      <text x="190" y="196" text-anchor="middle" fill="#9a3412" font-size="10.5" font-weight="700" class="svg-auto-label">Đường viền không đều • Túi thực bào • Bào tương không đồng nhất</text>
    </svg>`,
    pins: [
      { x: 45, y: 55, label: "Tế bào bụi ở phế nang phổi", detail: "Đại thực bào tại chỗ ở phổi nằm dính biểu mô phế nang hoặc tự do trong lòng phế nang, thực bào các hạt bụi lạ trong không khí." },
      { x: 38, y: 38, label: "Bào tương không đồng nhất nhiều thể vùi", detail: "Chứa nhiều túi thực bào và thể vùi khác nhau về kích thước, mật độ (ở lách chứa sắc tố hemosiderin; ở gan gọi là tế bào Kupffer)." }
    ],
    decoder: "Nhớ đủ 3 tên đại thực bào tại chỗ trong sách (tr.35): Gan = tế bào Kupffer; Lách = đại thực bào chứa thể vùi sắc tố hemosiderin; Phổi = tế bào bụi."
  },
  {
    id: "h_3_5",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.5",
    page: 36,
    kind: "svg",
    stain: "Sơ đồ xuyên mạch (Diapedesis)",
    title: "Đại thực bào viêm xâm nhập ổ viêm",
    svg: `<svg viewBox="0 0 540 215" class="fig-svg" style="background:#fff">
      <!-- Blood vessel lumen -->
      <rect x="20" y="24" width="500" height="58" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5"/>
      <text x="270" y="42" text-anchor="middle" fill="#9f1239" font-size="11.5" font-weight="800">LÒNG MẠCH MÁU (Mono bào tuần hoàn)</text>
      <!-- Endothelial wall -->
      <line x1="20" y1="82" x2="295" y2="82" stroke="#be123c" stroke-width="4"/>
      <line x1="335" y1="82" x2="520" y2="82" stroke="#be123c" stroke-width="4"/>
      <!-- 1. Margination -->
      <circle cx="80" cy="64" r="14" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
      <text x="80" y="68" text-anchor="middle" font-size="10" font-weight="800">1</text>
      <!-- 2. Pseudopod -->
      <path d="M175 64 A14 14 0 1 1 200 72 L192 86 L184 74 Z" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
      <text x="190" y="64" text-anchor="middle" font-size="10" font-weight="800">2</text>
      <!-- 3. Diapedesis through endothelial gap -->
      <path d="M300 66 Q315 48 330 66 Q324 82 328 106 Q315 118 302 106 Q306 82 300 66 Z" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
      <text x="315" y="72" text-anchor="middle" font-size="10" font-weight="800">3</text>
      <!-- Migration to inflammatory focus -->
      <path d="M325 118 L385 152 L440 165" stroke="#c2410c" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <circle cx="385" cy="148" r="14" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
      <circle cx="465" cy="172" r="24" fill="#fecdd3" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="465" y="176" text-anchor="middle" fill="#9f1239" font-size="11" font-weight="800">Ổ VIÊM</text>
      <text x="190" y="160" text-anchor="middle" fill="#9a3412" font-size="11.5" font-weight="800" class="svg-auto-label">Đại thực bào viêm dọn tế bào chết &amp; mảnh vụn</text>
    </svg>`,
    pins: [
      { x: 15, y: 30, label: "1. Mono bào trong lòng mạch bám thành", detail: "Mono bào từ máu áp sát vào lớp tế bào nội mô thành mạch." },
      { x: 58, y: 38, label: "2–3. Xuyên mạch qua kẽ tế bào nội mô", detail: "Tế bào thò chân giả lách qua khe giữa hai tế bào nội mô để đi vào mô liên kết." },
      { x: 86, y: 78, label: "Đến ổ viêm thực bào", detail: "Kết hợp với đại thực bào tại chỗ tạo túi thực bào rất lớn dọn sạch tế bào chết." }
    ],
    decoder: "Minh họa nguồn gốc đại thực bào viêm: từ MONO BÀO trong máu xuyên mạch vào mô (bổ sung cùng đại thực bào tại chỗ)."
  },
  {
    id: "h_3_6",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.6",
    page: 36,
    kind: "svg",
    stain: "Sơ đồ miễn dịch học",
    title: "Đại thực bào tham gia hệ thống miễn dịch (Phụ trợ miễn dịch)",
    svg: `<svg viewBox="0 0 520 200" class="fig-svg" style="background:#fff">
      <!-- 1. Phagocytosis of antigen -->
      <path d="M55 110 C42 75 75 50 112 58 C142 62 152 105 134 132 C112 155 68 148 55 110 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="96" cy="112" r="10" fill="#854d0e"/>
      <circle cx="76" cy="40" r="5" fill="#dc2626"/><circle cx="98" cy="36" r="5" fill="#dc2626"/><circle cx="118" cy="44" r="5" fill="#dc2626"/>
      <circle cx="98" cy="76" r="8" fill="#fff" stroke="#ca8a04"/>
      <circle cx="98" cy="76" r="3" fill="#dc2626"/>
      <text x="98" y="176" text-anchor="middle" fill="#854d0e" font-size="11" font-weight="800">1. Thực bào kháng nguyên</text>

      <path d="M162 100 L225 100" stroke="#64748b" stroke-width="3"/>
      <polygon points="222,94 235,100 222,106" fill="#64748b"/>

      <!-- 2. Antigen presentation to Helper T cell -->
      <path d="M255 110 C242 72 280 50 315 58 C345 64 352 108 332 134 C308 156 268 148 255 110 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="295" cy="112" r="10" fill="#854d0e"/>
      <!-- Presented antigen triangles -->
      <polygon points="342,84 356,90 342,96" fill="#dc2626"/>
      <polygon points="342,106 356,112 342,118" fill="#dc2626"/>
      <!-- Helper T lymphocyte -->
      <circle cx="420" cy="100" r="34" fill="#ddd6fe" stroke="#6d28d9" stroke-width="2.5"/>
      <circle cx="420" cy="100" r="22" fill="#5b21b6"/>
      <text x="420" y="54" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">Lympho bào T hỗ trợ</text>
      <text x="315" y="176" text-anchor="middle" fill="#be123c" font-size="11" font-weight="800">2. Trình diện kháng nguyên cho T hỗ trợ</text>
    </svg>`,
    pins: [
      { x: 19, y: 50, label: "Thực bào & Tiêu hóa biến đổi kháng nguyên", detail: "Đại thực bào nuốt kháng nguyên vào túi thực bào, xử lý biến đổi thành mảnh peptid kháng nguyên." },
      { x: 66, y: 50, label: "Trình diện kháng nguyên cho Lympho bào T hỗ trợ", detail: "Đưa kháng nguyên đã xử lý ra bề mặt để kích hoạt lympho bào T hỗ trợ khởi phát đáp ứng miễn dịch." }
    ],
    decoder: "Vai trò thứ ba của đại thực bào (tế bào phụ trợ miễn dịch): thực bào → biến đổi → trình diện kháng nguyên cho lympho T hỗ trợ."
  },
  {
    id: "h_3_7",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.7",
    page: 37,
    kind: "micrograph",
    stain: "H&E (Viêm mạn / Mô liên kết)",
    title: "Tương bào (Plasma cell)",
    img: "assets/histology/plasma_cell_he.jpg",
    credit: "Nephron (CC BY-SA 3.0)",
    pins: [
      { x: 52, y: 45, label: "Nhân tròn lệch một phía & Chất nhiễm sắc bám màng", detail: "Đặc điểm vàng để nhận ra tương bào: nhân tròn nằm lệch 1 bên, chất nhiễm sắc cô đặc thành từng khối bám mặt trong màng nhân ('hình nan hoa')." },
      { x: 54, y: 48, label: "Bào tương rất ái kiềm (giàu LNBH) & Vùng Golgi sáng", detail: "Lưới nội bào hạt phát triển mạnh làm bào tương bắt màu xanh tím (ái kiềm) để tổng hợp globulin miễn dịch; cạnh nhân thường thấy quầng Golgi sáng." }
    ],
    decoder: "Tương bào thực hiện MIỄN DỊCH DỊCH THỂ (tổng hợp & tích trữ kháng thể/globulin miễn dịch). Cặp từ khóa nhận diện: nhân lệch 1 bên + chất nhiễm sắc cô đặc thành khối bám màng nhân + bào tương rất ái kiềm (LNBH) + Golgi cạnh nhân."
  },
  {
    id: "h_3_8",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.8",
    page: 37,
    kind: "hybrid",
    stain: "Nhuộm ái kiềm / Toluidine & Sơ đồ IgE",
    title: "Tế bào Mast (Masto bào) & Cơ chế Phản ứng Dị ứng",
    img: "assets/histology/mast_cell.jpg",
    imgCaption: "Masto bào lớn (>20 µm) nằm trong mô liên kết với đầy hạt ái kiềm lớn trong bào tương.",
    credit: "Dr. Roshan Nasimudeen (CC BY-SA 3.0)",
    svg: `<svg viewBox="0 0 380 215" class="fig-svg" style="background:#fff">
      <text x="190" y="20" text-anchor="middle" fill="#6d28d9" font-size="11.5" font-weight="800">HOẠT HÓA MASTO BÀO TRONG PHẢN ỨNG DỊ ỨNG</text>
      <!-- Cell 1: Sensitized -->
      <circle cx="95" cy="112" r="46" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
      <circle cx="95" cy="112" r="14" fill="#581c87"/>
      <circle cx="72" cy="95" r="4" fill="#4c1d95"/><circle cx="118" cy="96" r="4" fill="#4c1d95"/><circle cx="74" cy="130" r="4" fill="#4c1d95"/><circle cx="116" cy="128" r="4" fill="#4c1d95"/>
      <!-- Y-shaped IgE receptors -->
      <path d="M95 66 L95 54 M95 54 L88 46 M95 54 L102 46" stroke="#dc2626" stroke-width="2.5" fill="none"/>
      <path d="M141 112 L153 112 M153 112 L160 105 M153 112 L160 119" stroke="#dc2626" stroke-width="2.5" fill="none"/>
      <text x="95" y="182" text-anchor="middle" fill="#581c87" font-size="10.2" font-weight="700" class="svg-auto-label">Lần 1: Gắn IgE lên thụ thể</text>

      <path d="M168 112 L205 112" stroke="#475569" stroke-width="2.5"/>
      <polygon points="202,107 212,112 202,117" fill="#475569"/>

      <!-- Cell 2: Degranulation on 2nd exposure -->
      <circle cx="282" cy="112" r="46" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
      <circle cx="282" cy="112" r="14" fill="#831843"/>
      <path d="M282 66 L282 54 M282 54 L275 46 M282 54 L289 46" stroke="#dc2626" stroke-width="2.5" fill="none"/>
      <circle cx="282" cy="43" r="6" fill="#f59e0b" stroke="#b45309"/>
      <!-- Released granules -->
      <circle cx="242" cy="58" r="3" fill="#6d28d9"/><circle cx="326" cy="64" r="3" fill="#6d28d9"/>
      <circle cx="338" cy="108" r="3" fill="#6d28d9"/><circle cx="322" cy="160" r="3" fill="#6d28d9"/>
      <text x="282" y="182" text-anchor="middle" fill="#be185d" font-size="10.2" font-weight="700" class="svg-auto-label">Lần 2: Kháng nguyên → Phóng hạt</text>
    </svg>`,
    pins: [
      { x: 48, y: 50, label: "Masto bào (>20 µm) giàu hạt ái kiềm", detail: "Hạt ái kiềm chứa histamin (giãn mạch, tăng thấm, co cơ trơn), protease, ECF-A (hóa ứng động BC ái toan) và heparin." },
      { x: 74, y: 30, label: "Cầu nối IgE – Kháng nguyên", detail: "Lần tiếp xúc 1: gắn IgE lên thụ thể bề mặt. Lần tiếp xúc 2: kháng nguyên gắn IgE kích hoạt phóng hạt gây dị ứng." }
    ],
    decoder: "Nhớ cả 4 chất trong hạt ái kiềm của masto bào (tr. 37): Histamin, Protease, ECF-A (eosinophil chemotactic factor of anaphylaxis) và Heparin; nguồn gốc từ tế bào gốc tủy xương!"
  },
  {
    id: "h_3_9",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.9",
    page: 37,
    kind: "svg",
    stain: "KHV Điện tử xuyên (Thước 4,2 µm)",
    title: "Chu bào dưới kính hiển vi điện tử",
    svg: `<svg viewBox="0 0 460 220" class="fig-svg" style="background:#1e293b">
      <!-- Capillary lumen -->
      <path d="M25 25 L260 25 Q215 115 260 205 L25 205 Z" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <text x="115" y="108" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="800">LÒNG MẠCH MÁU</text>
      <!-- Endothelial cell lining -->
      <path d="M260 25 Q215 115 260 205 L286 205 Q242 115 286 25 Z" fill="#64748b" stroke="#e2e8f0" stroke-width="2"/>
      <text x="200" y="42" fill="#e2e8f0" font-size="11" font-weight="800" class="svg-auto-label">TB Nội mô</text>
      <!-- Basement membrane separating endothelium & pericyte -->
      <path d="M292 25 Q248 115 292 205" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,3" fill="none"/>
      <!-- Pericyte hugging capillary -->
      <path d="M300 32 Q265 115 300 198 L410 182 C442 145 442 85 410 48 Z" fill="#475569" stroke="#f8fafc" stroke-width="2.5"/>
      <ellipse cx="355" cy="115" rx="34" ry="44" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
      <text x="355" y="119" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="800">CHU BÀO</text>
      <!-- Scale bar 4.2 um -->
      <line x1="36" y1="34" x2="100" y2="34" stroke="#ffffff" stroke-width="3"/>
      <text x="68" y="50" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">4,2 µm</text>
    </svg>`,
    pins: [
      { x: 25, y: 50, label: "Lòng mạch máu & Tế bào nội mô", detail: "Tế bào nội mô lát dẹt lót trực tiếp lòng mao mạch." },
      { x: 60, y: 52, label: "Màng đáy ngăn cách", detail: "Tế bào nội mô của mao mạch được ngăn cách với chu bào (tế bào trung mô) qua 1 màng đáy." },
      { x: 78, y: 52, label: "Chu bào ôm quanh mao mạch", detail: "Có tận cùng thần kinh trên bề mặt nên giữ chức năng điều chỉnh kích thước lòng mao mạch." }
    ],
    decoder: "Chu bào là tế bào trung mô nằm sát mao mạch, ngăn cách với tế bào nội mô bởi 1 màng đáy và có tận cùng thần kinh giúp điều chỉnh lòng mao mạch."
  },
  {
    id: "h_3_10",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.10",
    page: 38,
    kind: "hybrid",
    stain: "KHV Điện tử xuyên (TEM) & Sơ đồ 64 nm",
    title: "Sợi collagen dạng vân tạo băng tối – sáng (Chu kỳ 64 nm)",
    img: "assets/histology/collagen_tem.jpg",
    imgCaption: "Ảnh TEM vi sợi collagen hiển thị các dải vân ngang sáng – tối đều đặn chu kỳ 64 nm.",
    credit: "Vincesherman (CC BY-SA 4.0)",
    svg: `<svg viewBox="0 0 380 220" class="fig-svg" style="background:#fff">
      <text x="190" y="20" text-anchor="middle" fill="#9f1239" font-size="11.5" font-weight="800">CƠ CHẾ TẠO VÂN 64 nm CỦA TROPOCOLLAGEN (Dài 280 nm)</text>
      <!-- Staggered tropocollagen rods -->
      ${[0,1,2,3,4].map((row) => {
        const y = 42 + row * 16;
        const off = (row % 5) * 32;
        return `<line x1="${24+off}" y1="${y}" x2="${24+off+165}" y2="${y}" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
                <line x1="${24+off+195}" y1="${y}" x2="${24+off+340}" y2="${y}" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>`;
      }).join("")}
      <!-- Dark & Light band indicators -->
      <rect x="152" y="130" width="32" height="44" fill="#334155"/>
      <rect x="184" y="130" width="30" height="44" fill="#cbd5e1"/>
      <rect x="214" y="130" width="32" height="44" fill="#334155"/>
      <text x="168" y="192" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="800">Băng tối</text>
      <text x="200" y="192" text-anchor="middle" fill="#475569" font-size="10" font-weight="800">Băng sáng (30 nm)</text>
      <text x="190" y="210" text-anchor="middle" fill="#dc2626" font-size="10.5" font-weight="800">Chu kỳ lặp lại = 64 nm</text>
    </svg>`,
    pins: [
      { x: 45, y: 45, label: "Băng tối – băng sáng chu kỳ 64 nm", detail: "Do các phân tử tropocollagen (dài 280 nm) xếp song song nhưng so le nhau từng nấc 64 nm tạo khoảng trống 30 nm giữa đầu-đuôi." }
    ],
    decoder: "Thông số chuẩn nhớ ngay: Đường kính tropocollagen = 1,5 nm, chiều dài = 280 nm; xếp lệch nhau tạo vân sáng – tối chu kỳ 64 nm (khoảng hở 30 nm)."
  },
  {
    id: "h_3_11",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.11",
    page: 39,
    kind: "svg",
    stain: "Sơ đồ phân tử & Sinh tổng hợp",
    title: "Vi sợi collagen: Xoắn 3 chuỗi alpha & Con đường tổng hợp",
    svg: `<svg viewBox="0 0 540 230" class="fig-svg" style="background:#fff">
      <!-- Top: A (1 alpha chain 1nm) & B (3-helix tropocollagen 3nm) -->
      <rect x="14" y="14" width="190" height="202" rx="10" fill="#fef2f2" stroke="#e11d48"/>
      <text x="109" y="34" text-anchor="middle" fill="#9f1239" font-size="11.5" font-weight="800">CẤU TRÚC TROPOCOLLAGEN</text>
      <path d="M56 54 Q70 74 56 94 Q42 114 56 134 Q70 154 56 174" stroke="#64748b" stroke-width="3" fill="none"/>
      <text x="56" y="194" text-anchor="middle" fill="#334155" font-size="10" font-weight="700">1 chuỗi α (~1 nm)</text>
      <path d="M136 54 Q156 74 136 94 Q116 114 136 134 Q156 154 136 174" stroke="#e11d48" stroke-width="3" fill="none"/>
      <path d="M148 54 Q128 74 148 94 Q168 114 148 134 Q128 154 148 174" stroke="#0284c7" stroke-width="3" fill="none"/>
      <path d="M142 54 Q150 74 142 94 Q134 114 142 134 Q150 154 142 174" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <text x="144" y="194" text-anchor="middle" fill="#9f1239" font-size="10" font-weight="700">3 chuỗi xoắn (~3 nm)</text>

      <!-- Bottom/Right: Biosynthesis pathway -->
      <rect x="220" y="14" width="306" height="202" rx="10" fill="#f5f3ff" stroke="#7c3aed"/>
      <text x="373" y="34" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">TỔNG HỢP: NỘI BÀO → NGOẠI BÀO</text>
      <rect x="236" y="48" width="128" height="36" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
      <text x="300" y="64" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">1. Ribosom / LNBH</text>
      <text x="300" y="78" text-anchor="middle" fill="#4c1d95" font-size="9.5">Chuỗi tiền alpha</text>
      <path d="M364 66 L388 66" stroke="#6d28d9" stroke-width="2.5"/>
      <rect x="388" y="48" width="124" height="36" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
      <text x="450" y="64" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">2. Bộ Golgi</text>
      <text x="450" y="78" text-anchor="middle" fill="#4c1d95" font-size="9.5">Ghép 3 → Procollagen</text>
      <path d="M450 84 L450 106" stroke="#6d28d9" stroke-width="2.5"/>
      <rect x="366" y="106" width="146" height="34" rx="8" fill="#fce7f3" stroke="#be185d"/>
      <text x="439" y="121" text-anchor="middle" fill="#9d174d" font-size="10.5" font-weight="800">3. Túi chế tiết xuất bào</text>
      <text x="439" y="134" text-anchor="middle" fill="#9d174d" font-size="9.5">Cắt 2 đầu peptide ở ngoại bào</text>
      <path d="M366 123 L342 123" stroke="#be185d" stroke-width="2.5"/>
      <rect x="236" y="106" width="106" height="34" rx="8" fill="#dcfce7" stroke="#16a34a"/>
      <text x="289" y="121" text-anchor="middle" fill="#166534" font-size="10.5" font-weight="800">4. Tropocollagen</text>
      <text x="289" y="134" text-anchor="middle" fill="#166534" font-size="9.5">Tự lắp vi sợi 64 nm</text>
      <text x="373" y="176" text-anchor="middle" fill="#b91c1c" font-size="10.5" font-weight="800" class="svg-auto-label">Procollagen KHÔNG kết tụ trong tế bào vì còn 2 đoạn peptide ngắn!</text>
    </svg>`,
    pins: [
      { x: 20, y: 50, label: "3 chuỗi alpha (~1000 aa/chuỗi)", detail: "Mỗi phân tử tropocollagen đường kính 1,5 nm, dài 280 nm, tạo từ 3 chuỗi alpha xoắn quanh nhau." },
      { x: 68, y: 30, label: "LNBH → Golgi → Procollagen", detail: "Chuỗi tiền alpha còn đoạn peptide ngắn ở 2 đầu ức chế sự kết tụ sớm bên trong tế bào." },
      { x: 56, y: 60, label: "Cắt đoạn peptide ở ngoại bào", detail: "Chỉ khi ra môi trường ngoại bào, procollagen mới bị cắt 2 đầu biến thành tropocollagen để tự lắp thành vi sợi." }
    ],
    decoder: "Sơ đồ giải thích câu hỏi cực hay: Tại sao collagen không tự kết bó làm tắc bên trong tế bào? Vì procollagen còn 2 đoạn peptide ngắn ở 2 đầu ức chế kết tụ cho tới khi được xuất ra ngoại bào!"
  },
  {
    id: "h_3_12",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.12",
    page: 40,
    kind: "hybrid",
    stain: "Trichrome, TEM (0,31 & 2,98 µm), Ngấm bạc",
    title: "Bốn týp Collagen kinh điển (Týp I, II, III, IV)",
    panels: [
      { img: "assets/histology/dense_irregular.jpg", label: "Collagen Týp I (>80%)", desc: "Tạo bó sợi dày lớn (bắt màu xanh lá cây trong sách); gặp ở bì da, xương, sụn xơ, cân, dây chằng, gân cơ." },
      { img: "assets/histology/hyaline_cartilage.jpg", label: "Collagen Týp II (Sụn trong)", desc: "Vi sợi rất mảnh kết hợp dạng tấm dạ phớt (thước 0,31 µm) → nền sụn trông đồng nhất dưới KHV quang học." },
      { img: "assets/histology/reticular_ct.jpg", label: "Collagen Týp III (Sợi lưới)", desc: "Sợi nhỏ phân nhánh đan mạng; KHÔNG thấy khi nhuộm thường → ngấm bạc bắt màu ĐEN; khung đỡ cơ quan tạo huyết, bọc TB mỡ & cơ trơn." },
      { svg: `<svg viewBox="0 0 240 165" class="fig-svg" style="background:#f8fafc"><path d="M12 108 L228 108" stroke="#0f172a" stroke-width="9" stroke-dasharray="10,2"/><path d="M35 104 C35 55 72 52 72 104 M102 104 C102 45 144 45 144 104 M168 104 C168 58 208 58 208 104" fill="#cbd5e1" stroke="#334155" stroke-width="2"/><text x="120" y="28" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="800">Màng đáy cầu thận (2,98 µm)</text><text x="120" y="142" text-anchor="middle" fill="#be123c" font-size="10.5" font-weight="800">COLLAGEN TÝP IV</text><text x="120" y="156" text-anchor="middle" fill="#475569" font-size="9.5">Không tạo vi sợi • Nối đầu–đầu</text></svg>`, label: "Collagen Týp IV (Màng đáy cầu thận)", desc: "Chỉ gặp trong màng đáy cầu thận; KHÔNG tạo vi sợi mà kết hợp hóa học giữa các đầu phân tử (thước 2,98 µm)." }
    ],
    pins: [
      { label: "Phân biệt nhanh 4 týp", detail: "I: bó dày (>80%, xương/da/gân) • II: mảnh như dạ phớt (sụn trong) • III: sợi lưới ngấm bạc đen (tạo huyết) • IV: không thành vi sợi (màng đáy cầu thận)." }
    ],
    decoder: "Trọn bộ 4 ảnh Hình 3.12 cần nhớ đúng vị trí & kỹ thuật nhuộm của từng týp: đặc biệt Týp III (ngấm bạc màu đen) và Týp IV (chỉ gặp ở màng đáy cầu thận, không tạo vi sợi)."
  },
  {
    id: "h_3_13",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.13",
    page: 41,
    kind: "svg",
    stain: "Sơ đồ phân tử (Sợi chun, Proteoglycan, Fibronectin)",
    title: "Sợi đàn hồi & Cấu trúc Chất căn bản (Proteoglycan – Fibronectin)",
    svg: `<svg viewBox="0 0 560 270" class="fig-svg" style="background:#fff">
      <!-- Part A: Elastic fiber stretching -->
      <rect x="12" y="12" width="262" height="118" rx="10" fill="#ecfdf5" stroke="#0f766e"/>
      <text x="143" y="30" text-anchor="middle" fill="#0f766e" font-size="11" font-weight="800">1. SỢI CHUN (Elastin + Vi sợi 10 nm)</text>
      <path d="M35 64 C55 42 75 84 95 58 C115 40 135 86 165 60 C195 44 215 80 245 58" stroke="#0f766e" stroke-width="3" fill="none"/>
      <line x1="95" y1="60" x2="110" y2="75" stroke="#be123c" stroke-width="2.5"/>
      <text x="143" y="92" text-anchor="middle" fill="#334155" font-size="9.8" font-weight="700">Co (cuộn xoắn) ↔ Căng (duỗi nhờ nhánh nối)</text>
      <text x="143" y="114" text-anchor="middle" fill="#0f766e" font-size="9.5" class="svg-auto-label">Nhuộm Aldehyde fuchsin → TÍM (750 aa elastin)</text>

      <!-- Part B: Proteoglycan aggregate -->
      <rect x="286" y="12" width="262" height="118" rx="10" fill="#eff6ff" stroke="#0284c7"/>
      <text x="417" y="30" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">2. TẬP HỢP PROTEOGLYCAN (Trăm triệu Da)</text>
      <line x1="312" y1="74" x2="524" y2="74" stroke="#0284c7" stroke-width="5"/>
      ${[332,372,412,452,492].map((x) => `
        <line x1="${x}" y1="74" x2="${x}" y2="46" stroke="#1e3a8a" stroke-width="2.5"/>
        <line x1="${x}" y1="74" x2="${x}" y2="102" stroke="#1e3a8a" stroke-width="2.5"/>
        <circle cx="${x}" cy="74" r="3.5" fill="#16a34a"/>
        <path d="M${x-10} 54 L${x+10} 54 M${x-10} 62 L${x+10} 62 M${x-10} 86 L${x+10} 86 M${x-10} 94 L${x+10} 94" stroke="#db2777" stroke-width="1.8"/>
      `).join("")}
      <text x="417" y="118" text-anchor="middle" fill="#0369a1" font-size="9.5" font-weight="700" class="svg-auto-label">Acid hyaluronic + Protein nối + Proteoglycan + GAG</text>

      <!-- Part C: Fibronectin bridge -->
      <rect x="12" y="142" width="536" height="116" rx="10" fill="#fdf2f8" stroke="#be185d"/>
      <text x="280" y="162" text-anchor="middle" fill="#9d174d" font-size="11" font-weight="800">3. FIBRONECTIN (Gắn Siêu sợi Actin nội bào với Proteoglycan &amp; Collagen)</text>
      <!-- Actin & Membrane -->
      <line x1="40" y1="180" x2="520" y2="180" stroke="#1e40af" stroke-width="5" stroke-dasharray="6,3"/>
      <rect x="40" y="192" width="480" height="8" fill="#cbd5e1" stroke="#64748b"/>
      <!-- Transmembrane proteins -->
      <circle cx="195" cy="196" r="7" fill="#f59e0b"/><circle cx="365" cy="196" r="7" fill="#f59e0b"/>
      <!-- Fibronectin dimer with -S-S- -->
      <path d="M195 203 L195 228 L120 236 M365 203 L365 228 L440 236" stroke="#e11d48" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M195 215 L365 215" stroke="#0f172a" stroke-width="3"/>
      <rect x="255" y="206" width="50" height="18" rx="4" fill="#fff" stroke="#0f172a"/>
      <text x="280" y="219" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="800">-S-S-</text>
      <!-- Collagen fibril below -->
      <rect x="40" y="236" width="480" height="12" fill="#22c55e" stroke="#15803d"/>
      <text x="280" y="246" text-anchor="middle" fill="#ffffff" font-size="9.5" font-weight="800">Vi sợi Collagen &amp; Proteoglycan ngoại bào</text>
    </svg>`,
    pins: [
      { x: 25, y: 28, label: "Sợi chun (Elastin 750 aa + vi sợi 10 nm)", detail: "Khi kéo sẽ duỗi thẳng, thả ra lại cuộn nhờ nhánh nối; nhuộm aldehyde fuchsin màu tím." },
      { x: 75, y: 28, label: "Tập hợp Proteoglycan", detail: "Hàng trăm chuỗi GAG (đường đôi ưa nước) gắn vào trục protein → nhiều proteoglycan gắn lên acid hyaluronic qua protein nối → giữ nước căng phồng." },
      { x: 50, y: 78, label: "Fibronectin (Cầu nối disulfur -S-S-)", detail: "2 chuỗi protein gắn qua cầu nối -S-S- bắc cầu giữa siêu sợi actin nội bào (qua protein xuyên màng) với collagen & proteoglycan." }
    ],
    decoder: "Trang 41 tuy chỉ đặt tên Hình 3.13 dưới 3 sơ đồ nhưng gộp đủ 3 cấu trúc phân tử quan trọng nhất của sợi chun & chất căn bản!"
  },
  {
    id: "h_3_14",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.14",
    page: 42,
    kind: "micrograph",
    stain: "H&E (Dây rốn / Phôi thai)",
    title: "Mô liên kết nhầy (Chất căn bản chiếm ưu thế)",
    img: "assets/histology/mucous_ct_wharton.jpg",
    credit: "Falty14 (CC BY-SA 4.0)",
    pins: [
      { x: 42, y: 45, label: "Chất căn bản mucoid rộng chiếm ưu thế", detail: "Khoảng gian bào cực kỳ phong phú ưa nước và trong sáng." },
      { x: 64, y: 58, label: "Tế bào trung mô thưa hình sao/thoi", detail: "Tế bào nằm thưa thớt rải rác trong chất căn bản; phổ biến ở phôi thai, rất hiếm ở người lớn (chỉ quanh một số tuyến & mạch máu)." }
    ],
    decoder: "Nhớ phân loại 4 mô liên kết chính thức theo thành phần ưu thế: Chất căn bản ưu thế = Mô liên kết nhầy (Hình 3.14)."
  },
  {
    id: "h_3_15",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.15",
    page: 42,
    kind: "micrograph",
    stain: "Nhuộm toàn khối (Whole mount)",
    title: "Mô liên kết thưa (Thành phần tế bào chiếm ưu thế)",
    img: "assets/histology/loose_ct.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 35, y: 55, label: "Tế bào mô liên kết phong phú", detail: "Thành phần tế bào (nguyên bào sợi, đại thực bào, masto bào...) chiếm ưu thế; chất căn bản không đáng kể." },
      { x: 62, y: 42, label: "Sợi collagen hồng & Sợi chun mảnh đan thưa", detail: "Các sợi liên kết đan lỏng lẻo tạo khoảng không gian cho mạch máu và tế bào miễn dịch." }
    ],
    decoder: "Sách tr.42 định nghĩa ngắn gọn: Mô liên kết thưa có thành phần TẾ BÀO chiếm ưu thế, chất căn bản có số lượng không đáng kể."
  },
  {
    id: "h_3_16",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.16",
    page: 42,
    kind: "hybrid",
    stain: "H&E (Vỏ bao cơ quan & Gân)",
    title: "Mô liên kết đặc (Không định hướng vs Có định hướng)",
    panels: [
      { img: "assets/histology/dense_irregular.jpg", label: "MLK đặc KHÔNG định hướng", desc: "Các bó sợi collagen týp I lớn chạy theo MỌI hướng; ít nguyên bào sợi & ít chất căn bản — là loại thường gặp nhất (vỏ bao cơ quan, bì da)." },
      { img: "assets/histology/dense_regular.jpg", label: "MLK đặc CÓ định hướng", desc: "Sợi collagen xếp thành bó song song (trong gân, dây chằng) hoặc thành lớp song song (trong cân, lớp chân bì giác mạc)." }
    ],
    pins: [
      { label: "So sánh định hướng sợi", detail: "Không định hướng: bó sợi đan mọi hướng (vỏ bao cơ quan – thường gặp nhất) • Có định hướng: bó song song (gân, dây chằng) hoặc lớp song song (cân, giác mạc)." }
    ],
    decoder: "Câu tự lượng giá 2 (tr.45): Mô liên kết đặc có định hướng 'Có thể có trong gân', còn vỏ bao các cơ quan là mô liên kết đặc KHÔNG định hướng."
  },
  {
    id: "h_3_17",
    chapter: 3,
    lessonId: 5,
    code: "Hình 3.17",
    page: 42,
    kind: "micrograph",
    stain: "Nhuộm sợi chun (Động mạch chủ)",
    title: "Mô chun (Thành phần sợi chun chiếm ưu thế)",
    img: "assets/histology/elastic_aorta.jpg",
    credit: "Rustredrobot (CC BY-SA 4.0)",
    pins: [
      { x: 50, y: 48, label: "Các lá & sợi chun lượn sóng bắt màu tím", detail: "Sợi chun xếp dày đặc lượn sóng đều đặn chịu sự thay đổi thể tích lớn theo nhịp đập tim." },
      { x: 35, y: 72, label: "Thành động mạch chủ / động mạch phổi", detail: "Ở người, mô chun gặp trong dây chằng vàng cột sống, dây thanh âm, động mạch chủ và động mạch phổi." }
    ],
    decoder: "Mô chun ưu thế sợi chun, ở người chỉ gặp ở 3 vị trí kinh điển: dây chằng vàng cột sống, dây thanh âm và các động mạch lớn (động mạch chủ, động mạch phổi)."
  },
  {
    id: "h_3_18",
    chapter: 3,
    lessonId: 6,
    code: "Hình 3.18",
    page: 43,
    kind: "micrograph",
    stain: "Kỹ thuật ngấm bạc (Hạch / Lách)",
    title: "Mô lưới (Chỉ 2 thành phần: Tế bào lưới & Sợi lưới, không chất căn bản)",
    img: "assets/histology/reticular_ct.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 52, y: 46, label: "Sợi lưới collagen týp III bắt màu ĐEN", detail: "Khi ngấm bạc, sợi lưới hiện rõ màu đen đan kết thành mạng lưới đỡ thứ nhất." },
      { x: 32, y: 62, label: "Tế bào máu / lympho nằm trong mắt lưới", detail: "Các tế bào của cơ quan tạo huyết (hạch bạch huyết, lách, tủy xương) nằm tựa trong mắt lưới." },
      { x: 68, y: 34, label: "Vị trí tế bào lưới (thấy rõ khi nhuộm H&E)", detail: "Khi ngấm bạc khó thấy tế bào lưới; khi nhuộm thường thấy TB lưới hình sao nhiều nhánh nối thành mạng thứ 2 chồng lên." }
    ],
    decoder: "Mô liên kết chuyên biệt duy nhất CHỈ CÓ 2 THÀNH PHẦN (tế bào lưới + sợi lưới collagen týp III) và KHÔNG có chất căn bản!"
  },
  {
    id: "h_3_19",
    chapter: 3,
    lessonId: 6,
    code: "Hình 3.19",
    page: 43,
    kind: "hybrid",
    stain: "H&E (Mô mỡ trắng & So sánh Mỡ nâu)",
    title: "Mô mỡ (Mỡ trắng 1 giọt vs Mỡ nâu nhiều giọt)",
    img: "assets/histology/white_adipose.jpg",
    imgCaption: "Mô mỡ trắng: tiểu thùy mỡ với tế bào mỡ 1 giọt lipid lớn (đã hòa tan sáng) ép dẹt nhân sát màng.",
    credit: "Berkshire Community College (CC0)",
    svg: `<svg viewBox="0 0 380 215" class="fig-svg" style="background:#fff">
      <!-- White fat cell -->
      <rect x="12" y="14" width="172" height="186" rx="10" fill="#fefce8" stroke="#ca8a04"/>
      <text x="98" y="34" text-anchor="middle" fill="#854d0e" font-size="11.5" font-weight="800">MỠ TRẮNG (1 giọt lớn)</text>
      <circle cx="98" cy="108" r="52" fill="#fef08a" stroke="#a16207" stroke-width="2.5"/>
      <circle cx="98" cy="108" r="44" fill="#ffffff"/>
      <ellipse cx="144" cy="108" rx="4" ry="14" fill="#713f12"/>
      <text x="98" y="180" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="700" class="svg-auto-label">1 giọt lipid khổng lồ • Nhân ép dẹt</text>

      <!-- Brown fat cell -->
      <rect x="196" y="14" width="172" height="186" rx="10" fill="#fff7ed" stroke="#9a3412"/>
      <text x="282" y="34" text-anchor="middle" fill="#7c2d12" font-size="11.5" font-weight="800">MỠ NÂU (Trẻ sơ sinh)</text>
      <circle cx="282" cy="108" r="50" fill="#fed7aa" stroke="#7c2d12" stroke-width="2.5"/>
      <circle cx="282" cy="108" r="14" fill="#7c2d12"/>
      ${[[256,82],[306,82],[252,115],[312,115],[264,136],[300,136],[282,76],[282,140]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#ffffff" stroke="#c2410c"/>`).join("")}
      <text x="282" y="180" text-anchor="middle" fill="#7c2d12" font-size="10" font-weight="700" class="svg-auto-label">Nhiều giọt nhỏ • Giàu ty thể &amp; mao mạch</text>
    </svg>`,
    pins: [
      { x: 45, y: 45, label: "Giọt lipid lớn duy nhất (Mỡ trắng)", detail: "Các giọt mỡ nhỏ hòa nhập thành 1 giọt khổng lồ choán hết bào tương." },
      { x: 64, y: 36, label: "Nhân bị ép dẹt sát màng tế bào", detail: "Mỗi tế bào mỡ được bọc bên ngoài bởi mạng sợi collagen týp III." },
      { x: 75, y: 65, label: "Mỡ nâu nhiều giọt nhỏ & ty thể", detail: "Nhiều ở trẻ sơ sinh; màu nâu do giàu mao mạch và ty thể giúp sinh nhiệt." }
    ],
    decoder: "Mô mỡ RẤT GIÀU MẠCH MÁU (mỗi tiểu thùy nhận 1 tiểu động mạch chia lưới mao mạch dày đặc) và từng tế bào mỡ được bọc bởi mạng collagen týp III."
  },
  {
    id: "h_3_20",
    chapter: 3,
    lessonId: 4,
    code: "Hình 3.20",
    page: 44,
    kind: "svg",
    stain: "Sơ đồ tư duy (Mindmap 9 TB)",
    title: "Các đặc điểm của 9 loại tế bào mô liên kết",
    svg: `<svg viewBox="0 0 580 300" class="fig-svg" style="background:#f8fafc">
      <rect x="215" y="122" width="150" height="54" rx="12" fill="#6d28d9" stroke="#4c1d95" stroke-width="2"/>
      <text x="290" y="146" text-anchor="middle" fill="#fff" font-size="12.5" font-weight="800">TẾ BÀO MÔ LIÊN KẾT</text>
      <text x="290" y="164" text-anchor="middle" fill="#e9d5ff" font-size="10.5" font-weight="700">(9 loại chuẩn giáo trình)</text>
      <!-- Branches -->
      ${[
        [90,34,"1. TB trung mô","Hình sao • Nhân/BT > 1 • Đa năng","#16a34a"],
        [90,94,"2. Nguyên bào sợi / TB sợi","Hình thoi • LNBH • Đổi mới chất nền","#be123c"],
        [90,154,"3. Đại thực bào","Viền không đều • Kupffer/Bụi/Viêm/MD","#d97706"],
        [90,214,"4. Tương bào","Nhân lệch • Bào tương ái kiềm • Kháng thể","#7c3aed"],
        [90,270,"5. Masto bào","Gần mạch • >20µm • Histamin, IgE","#0f766e"],
        [490,44,"6. Chu bào","Gần mao mạch • Điều chỉnh lòng mạch","#0284c7"],
        [490,108,"7. TB nội mô","Lớn mỏng 75–150µm • Lót mạch máu","#9333ea"],
        [490,174,"8. TB sắc tố","Nhuộm bạc • Mào TK • Tạo melanin","#475569"],
        [490,240,"9. TB mỡ","1 giọt mỡ lớn • Nhân dẹt • Năng lượng","#ca8a04"]
      ].map(([x,y,t,sub,col]) => `
        <path d="M${x < 290 ? 215 : 365} 149 Q${x < 290 ? 185 : 395} ${y} ${x < 290 ? x+72 : x-72} ${y}" stroke="${col}" stroke-width="2.5" fill="none"/>
        <rect x="${x-82}" y="${y-22}" width="164" height="44" rx="8" fill="#ffffff" stroke="${col}" stroke-width="2"/>
        <text x="${x}" y="${y-4}" text-anchor="middle" fill="${col}" font-size="10.5" font-weight="800">${t}</text>
        <text x="${x}" y="${y+12}" text-anchor="middle" fill="#334155" font-size="8.6" font-weight="600" class="svg-auto-label">${sub}</text>
      `).join("")}
    </svg>`,
    pins: [
      { x: 16, y: 32, label: "5 TB cố định & liên hệ", detail: "Trung mô (đa năng), Nguyên bào sợi–TB sợi (đổi mới chất nền, tạo sẹo), Chu bào (điều chỉnh mao mạch), Nội mô (lót mạch máu), Sắc tố & Mỡ." },
      { x: 16, y: 72, label: "3 TB từ tế bào máu đi vào", detail: "Đại thực bào (từ mono bào), Tương bào (từ lympho B), Masto bào (từ TB gốc tủy xương)." }
    ],
    decoder: "Sơ đồ tư duy trang 44 là bảng tóm tắt hoàn hảo để ôn thi nhanh toàn bộ 9 loại tế bào mô liên kết chỉ trong 30 giây."
  },

  // ==================== CHƯƠNG 4: MÔ SỤN (4 HÌNH) ====================
  {
    id: "h_4_1",
    chapter: 4,
    lessonId: 7,
    code: "Hình 4.1",
    page: 46,
    kind: "svg",
    stain: "Sơ đồ giải phẫu phân bố sụn",
    title: "Sơ đồ phân bố mô sụn ở người trưởng thành",
    svg: `<svg viewBox="0 0 460 260" class="fig-svg" style="background:#fff7ed">
      <!-- Stylized torso & head silhouette + highlighted orange cartilages -->
      <circle cx="150" cy="48" r="26" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <!-- Ear & nose elastic/hyaline cartilage -->
      <ellipse cx="122" cy="50" rx="5" ry="9" fill="#f97316"/>
      <polygon points="150,42 145,56 155,56" fill="#f97316"/>
      <!-- Larynx & trachea rings -->
      <rect x="142" y="76" width="16" height="30" rx="3" fill="#fb923c" stroke="#c2410c"/>
      <!-- Rib cage & costal cartilages -->
      <ellipse cx="150" cy="140" rx="46" ry="42" fill="#fff" stroke="#64748b" stroke-width="2"/>
      <line x1="150" y1="100" x2="150" y2="178" stroke="#64748b" stroke-width="5"/>
      <path d="M114 116 L146 120 M112 132 L146 135 M118 148 L146 150 M186 116 L154 120 M188 132 L154 135 M182 148 L154 150" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>
      <!-- Knee & hip articular cartilage -->
      <circle cx="126" cy="204" r="10" fill="#fb923c" stroke="#c2410c"/>
      <circle cx="174" cy="204" r="10" fill="#fb923c" stroke="#c2410c"/>
      <!-- Legend list on right -->
      <rect x="230" y="20" width="215" height="220" rx="10" fill="#fff" stroke="#fed7aa" stroke-width="2"/>
      <text x="337" y="42" text-anchor="middle" fill="#9a3412" font-size="12" font-weight="800">VỊ TRÍ SỤN Ở NGƯỜI LỚN</text>
      <text x="245" y="72" fill="#c2410c" font-size="11" font-weight="700">• Sụn chun: Vành tai, nắp thanh quản</text>
      <text x="245" y="102" fill="#0284c7" font-size="11" font-weight="700">• Sụn trong: Mũi, thanh–khí–phế quản,</text>
      <text x="255" y="118" fill="#0284c7" font-size="11" font-weight="700">sụn sườn, sụn khớp đầu xương</text>
      <text x="245" y="150" fill="#6d28d9" font-size="11" font-weight="700">• Sụn xơ: Một số dây chằng, đĩa đệm</text>
      <text x="245" y="190" fill="#475569" font-size="10.2">Phôi thai: Toàn bộ khung xương là</text>
      <text x="245" y="206" fill="#475569" font-size="10.2">mô sụn, sau mới thay thế bằng xương.</text>
    </svg>`,
    pins: [
      { x: 32, y: 20, label: "Sụn đầu mặt & đường thở", detail: "Tai và nắp thanh quản là sụn chun; mũi, thanh quản, khí–phế quản là sụn trong." },
      { x: 32, y: 54, label: "Sụn sườn & Sụn khớp", detail: "Đầu xương khớp được phủ bởi sụn khớp (sụn trong KHÔNG có màng sụn), cùng dịch khớp ngăn cọ xát." }
    ],
    decoder: "Sụn phôi thai tạo toàn bộ bộ xương, đến người trưởng thành chỉ còn tại các vùng cần độ đàn hồi/trơn láng như sụn khớp, sụn sườn, đường hô hấp và tai."
  },
  {
    id: "h_4_2",
    chapter: 4,
    lessonId: 7,
    code: "Hình 4.2",
    page: 47,
    kind: "micrograph",
    stain: "H&E, Nhuộm chun & Trichrome (3 Panel)",
    title: "Mô học Sụn trong – Sụn chun – Sụn xơ",
    panels: [
      { img: "assets/histology/hyaline_cartilage.jpg", label: "A. Sụn trong (Hyaline)", desc: "Ổ sụn chứa 1 hoặc nhóm tế bào sụn cùng nguồn; quanh ổ sụn có vùng chất căn bản bắt màu baz đậm hơn gọi là CẦU SỤN; nền đồng nhất do collagen týp II mảnh." },
      { img: "assets/histology/elastic_cartilage.jpg", label: "B. Sụn chun (Elastic)", desc: "Mạng sợi chun nhuộm sẫm bao quanh các ổ sụn và chất căn bản; ít lipid, glycogen, chondroitin sulfat hơn sụn trong; KHÔNG bao giờ vôi hóa." },
      { img: "assets/histology/fibrocartilage.jpg", label: "C. Sụn xơ (Fibrocartilage)", desc: "Chứa bó sợi collagen týp I lớn xếp song song thấy rõ dưới KHV quang học xen các tế bào sụn; không có màng sụn." }
    ],
    pins: [
      { label: "Nhận diện 3 loại sụn", detail: "Sụn trong: nền mịn đồng nhất + cầu sụn đậm quanh ổ sụn • Sụn chun: nhiều sợi chun sẫm đan quanh ổ sụn • Sụn xơ: bó sợi collagen týp I rõ như mô liên kết đặc." }
    ],
    decoder: "Điểm mấu chốt Hình 4.2: Vùng chất căn bản đậm màu ngay quanh ổ sụn gọi là CẦU SỤN (giàu chondroitin sulfat – chiếm 40% trọng lượng khô mô sụn!)."
  },
  {
    id: "h_4_3",
    chapter: 4,
    lessonId: 7,
    code: "Hình 4.3",
    page: 48,
    kind: "hybrid",
    stain: "H&E & Sơ đồ 2 lớp màng sụn",
    title: "Mô sụn – Màng sụn (Lớp ngoài sợi & Lớp trong tế bào)",
    img: "assets/histology/hyaline_cartilage.jpg",
    imgCaption: "Dải màng sụn màu hồng bọc phía trên miếng sụn trong chuyển tiếp vào các ổ sụn bên dưới.",
    credit: "Berkshire Community College (CC0)",
    svg: `<svg viewBox="0 0 380 215" class="fig-svg" style="background:#fff">
      <!-- Outer fibrous layer -->
      <rect x="16" y="18" width="90" height="175" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
      <line x1="35" y1="24" x2="35" y2="186" stroke="#db2777" stroke-width="2"/>
      <line x1="60" y1="24" x2="60" y2="186" stroke="#db2777" stroke-width="2"/>
      <line x1="85" y1="24" x2="85" y2="186" stroke="#db2777" stroke-width="2"/>
      <text x="61" y="108" text-anchor="middle" fill="#9d174d" font-size="11" font-weight="800">LỚP NGOÀI</text>
      <text x="61" y="124" text-anchor="middle" fill="#831843" font-size="9.5">(Sợi collagen)</text>
      <!-- Inner cellular chondrogenic layer -->
      <rect x="106" y="18" width="84" height="175" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
      ${[42,72,102,132,162].map((y) => `<ellipse cx="148" cy="${y}" rx="20" ry="7" fill="#a78bfa" stroke="#4c1d95"/>`).join("")}
      <text x="148" y="184" text-anchor="middle" fill="#4c1d95" font-size="9.8" font-weight="800">LỚP TRONG (TB)</text>
      <!-- Cartilage matrix & lacunae -->
      <rect x="190" y="18" width="174" height="175" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="242" cy="65" r="20" fill="#fff" stroke="#5b21b6" stroke-width="2"/><circle cx="242" cy="65" r="7" fill="#5b21b6"/>
      <circle cx="315" cy="82" r="22" fill="#fff" stroke="#5b21b6" stroke-width="2"/><circle cx="308" cy="82" r="6" fill="#5b21b6"/><circle cx="322" cy="82" r="6" fill="#5b21b6"/>
      <circle cx="268" cy="142" r="24" fill="#fff" stroke="#5b21b6" stroke-width="2"/><circle cx="261" cy="142" r="6" fill="#5b21b6"/><circle cx="275" cy="142" r="6" fill="#5b21b6"/>
      <text x="277" y="182" text-anchor="middle" fill="#3b0764" font-size="10.5" font-weight="800">MÔ SỤN &amp; Ổ SỤN</text>
    </svg>`,
    pins: [
      { x: 25, y: 12, label: "Lớp ngoài màng sụn (nhiều sợi collagen)", detail: "Mô liên kết đặc bảo vệ bên ngoài miếng sụn." },
      { x: 40, y: 24, label: "Lớp trong màng sụn (TB sợi non / trung mô)", detail: "Biệt hóa thành nguyên bào sụn tiết chất nền tự vùi thành tế bào sụn (sinh sản đắp thêm)." },
      { x: 50, y: 55, label: "Vùng trung tâm miếng sụn", detail: "Tế bào sụn hình cầu nằm thành nhóm trong các ổ sụn." }
    ],
    decoder: "Màng sụn có ở hầu hết sụn, NGOẠI TRỪ hai nơi: (1) Sụn ở diện khớp và (2) Sụn xơ!"
  },
  {
    id: "h_4_4",
    chapter: 4,
    lessonId: 7,
    code: "Hình 4.4",
    page: 49,
    kind: "svg",
    stain: "Sơ đồ 3 cơ chế tăng trưởng",
    title: "Các kiểu sinh sản của tế bào sụn (Đắp thêm – Kiểu vòng – Kiểu trục)",
    svg: `<svg viewBox="0 0 560 225" class="fig-svg" style="background:#fff">
      <!-- 1. Appositional -->
      <rect x="12" y="14" width="170" height="196" rx="10" fill="#fdf2f8" stroke="#db2777"/>
      <text x="97" y="34" text-anchor="middle" fill="#9d174d" font-size="11.5" font-weight="800">1. SINH SẢN ĐẮP THÊM</text>
      <rect x="26" y="48" width="26" height="130" fill="#fbcfe8" stroke="#be185d"/>
      <text x="39" y="114" transform="rotate(-90 39 114)" text-anchor="middle" fill="#831843" font-size="9.5" font-weight="800">Màng sụn</text>
      <circle cx="84" cy="76" r="14" fill="#e9d5ff" stroke="#7c3aed"/><circle cx="84" cy="76" r="4" fill="#5b21b6"/>
      <circle cx="84" cy="116" r="14" fill="#e9d5ff" stroke="#7c3aed"/><circle cx="84" cy="116" r="4" fill="#5b21b6"/>
      <circle cx="132" cy="96" r="16" fill="#ddd6fe" stroke="#5b21b6"/><circle cx="132" cy="96" r="5" fill="#4c1d95"/>
      <path d="M54 76 L68 76 M54 116 L68 116" stroke="#db2777" stroke-width="2.5"/>
      <text x="97" y="196" text-anchor="middle" fill="#831843" font-size="9.8" font-weight="700" class="svg-auto-label">Từ lớp trong màng sụn</text>

      <!-- 2. Interstitial Circular (Kiểu vòng) -->
      <rect x="195" y="14" width="170" height="196" rx="10" fill="#f5f3ff" stroke="#7c3aed"/>
      <text x="280" y="34" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">2. GIAN BÀO KIỂU VÒNG</text>
      <circle cx="280" cy="112" r="44" fill="#ede9fe" stroke="#6d28d9" stroke-width="2" stroke-dasharray="5,3"/>
      <circle cx="262" cy="96" r="13" fill="#fff" stroke="#6d28d9"/><circle cx="262" cy="96" r="4.5" fill="#4c1d95"/>
      <circle cx="298" cy="96" r="13" fill="#fff" stroke="#6d28d9"/><circle cx="298" cy="96" r="4.5" fill="#4c1d95"/>
      <circle cx="262" cy="128" r="13" fill="#fff" stroke="#6d28d9"/><circle cx="262" cy="128" r="4.5" fill="#4c1d95"/>
      <circle cx="298" cy="128" r="13" fill="#fff" stroke="#6d28d9"/><circle cx="298" cy="128" r="4.5" fill="#4c1d95"/>
      <text x="280" y="196" text-anchor="middle" fill="#4c1d95" font-size="9.8" font-weight="700" class="svg-auto-label">Đổi mặt phẳng phân chia</text>

      <!-- 3. Interstitial Axial (Kiểu trục) -->
      <rect x="378" y="14" width="170" height="196" rx="10" fill="#ecfdf5" stroke="#16a34a"/>
      <text x="463" y="34" text-anchor="middle" fill="#166534" font-size="11.5" font-weight="800">3. GIAN BÀO KIỂU TRỤC</text>
      <rect x="442" y="48" width="42" height="128" rx="18" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
      ${[66,92,118,144].map((y) => `<ellipse cx="463" cy="${y}" rx="14" ry="9" fill="#fff" stroke="#15803d"/><circle cx="463" cy="${y}" r="4" fill="#14532d"/>`).join("")}
      <text x="463" y="196" text-anchor="middle" fill="#14532d" font-size="9.8" font-weight="700" class="svg-auto-label">Mặt phẳng KHÔNG đổi → Hàng dọc</text>
    </svg>`,
    pins: [
      { x: 18, y: 50, label: "Sinh sản đắp thêm", detail: "Tế bào trung mô lớp trong màng sụn thành nguyên bào sụn → tiết chất nền tự vùi vào ổ sụn làm tăng bề dày miếng sụn." },
      { x: 50, y: 50, label: "Sinh sản gian bào kiểu vòng", detail: "Mặt phẳng phân chia sau khác lần trước → tạo cụm tế bào sụn cùng nguồn xếp vòng (đặc trưng sụn trong)." },
      { x: 82, y: 50, label: "Sinh sản gian bào kiểu trục", detail: "Mặt phẳng phân chia giữ nguyên không đổi → tạo cột tế bào sụn xếp thẳng hàng dọc (thấy ở sụn tiếp hợp xương dài!)." }
    ],
    decoder: "Cực dễ nhớ: Đắp thêm = tăng chiều dày từ MÀNG SỤN; Gian bào = tế bào trong Ổ SỤN tự chia làm nở từ bên trong (Kiểu vòng: đổi góc chia; Kiểu trục: giữ nguyên góc chia xếp cột dọc)."
  },

  // ==================== CHƯƠNG 5: MÔ XƯƠNG (12 HÌNH) ====================
  {
    id: "h_5_1",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.1",
    page: 52,
    kind: "hybrid",
    stain: "Giải phẫu & Vi thể Xương đặc",
    title: "Cấu tạo của xương (Xương đặc Havers, Xương xốp & Tủy xương)",
    img: "assets/histology/compact_bone.jpg",
    imgCaption: "Cắt ngang xương đặc cho thấy nhiều hệ thống Havers đồng tâm nằm cạnh nhau.",
    credit: "Berkshire Community College (CC0)",
    svg: `<svg viewBox="0 0 380 230" class="fig-svg" style="background:#fff">
      <!-- Longitudinal femur head + shaft -->
      <path d="M55 24 C25 24 22 68 48 82 L48 206 L112 206 L112 82 C138 68 135 24 105 24 Z" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
      <!-- Spongy bone + red marrow at head -->
      <path d="M36 48 Q80 35 122 52 M42 64 Q80 80 116 62 M56 32 L100 72 M100 32 L56 72" stroke="#dc2626" stroke-width="2.5" opacity="0.7"/>
      <!-- Medullary cavity with yellow marrow -->
      <rect x="64" y="96" width="32" height="106" fill="#fde047" stroke="#ca8a04"/>
      <text x="150" y="42" fill="#dc2626" font-size="10.5" font-weight="800" class="svg-auto-label">Tủy đỏ &amp; Xương xốp</text>
      <text x="150" y="138" fill="#a16207" font-size="10.5" font-weight="800" class="svg-auto-label">Xương đặc &amp; Tủy vàng</text>
      <!-- 3D Osteon zoom on right -->
      <g transform="translate(275,130)">
        <circle cx="0" cy="0" r="66" fill="#fed7aa" stroke="#9a3412" stroke-width="2.5"/>
        <circle cx="0" cy="0" r="50" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="34" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="14" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
        <circle cx="-42" cy="0" r="4" fill="#451a03"/><circle cx="42" cy="0" r="4" fill="#451a03"/>
        <circle cx="0" cy="-42" r="4" fill="#451a03"/><circle cx="0" cy="42" r="4" fill="#451a03"/>
        <text x="0" y="-76" text-anchor="middle" fill="#9a3412" font-size="11" font-weight="800">Hệ thống Havers</text>
        <text x="0" y="84" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="800" class="svg-auto-label">Ống Havers giữa (Mạch máu)</text>
      </g>
    </svg>`,
    pins: [
      { x: 46, y: 44, label: "Hệ thống Havers (Xương đặc)", detail: "Cấu trúc hình trụ gồm nhiều lá xương đồng tâm dày ~7 µm bao quanh ống Havers ở giữa chứa mạch máu và mô liên kết." },
      { x: 64, y: 66, label: "Xương xốp & Tủy xương", detail: "Xương xốp tạo bởi các bè xương xếp nhiều hướng giữa là các hốc chứa tủy đỏ tạo huyết (đầu xương) hoặc tủy mỡ vàng (ống tủy thân xương)." }
    ],
    decoder: "Dù ở xương đặc (hệ thống Havers đồng tâm) hay xương xốp (bè xương), ĐƠN VỊ CẤU TẠO cơ bản đều là LÁ XƯƠNG xếp song song dày khoảng 7 µm!"
  },
  {
    id: "h_5_2",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.2",
    page: 53,
    kind: "svg",
    stain: "Sơ đồ 3 dạng xương giải phẫu",
    title: "Các loại xương (Xương dẹt – Xương ngắn – Xương dài)",
    svg: `<svg viewBox="0 0 540 235" class="fig-svg" style="background:#fff">
      <!-- Flat bone -->
      <rect x="20" y="24" width="210" height="66" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <rect x="24" y="28" width="202" height="14" fill="#94a3b8"/>
      <rect x="24" y="72" width="202" height="14" fill="#94a3b8"/>
      <rect x="24" y="42" width="202" height="30" fill="#fde68a" stroke="#b45309" stroke-dasharray="4,2"/>
      <text x="125" y="108" text-anchor="middle" fill="#1e293b" font-size="11.5" font-weight="800">XƯƠNG DẸT (2 bản đặc kẹp 1 xốp)</text>

      <!-- Short bone -->
      <rect x="65" y="128" width="110" height="78" rx="14" fill="#94a3b8" stroke="#334155" stroke-width="2.5"/>
      <rect x="75" y="138" width="90" height="58" rx="8" fill="#fde68a" stroke="#b45309" stroke-dasharray="4,2"/>
      <text x="120" y="224" text-anchor="middle" fill="#1e293b" font-size="11.5" font-weight="800">XƯƠNG NGẮN (Xốp + vỏ đặc mỏng)</text>

      <!-- Long bone -->
      <g transform="translate(360,16)">
        <path d="M22 10 C0 10 0 48 22 56 L22 150 C0 158 0 196 22 196 L64 196 C86 196 86 158 64 150 L64 56 C86 48 86 10 64 10 Z" fill="#94a3b8" stroke="#1e293b" stroke-width="2.5"/>
        <ellipse cx="43" cy="34" rx="22" ry="18" fill="#fde68a" stroke="#b45309"/>
        <ellipse cx="43" cy="172" rx="22" ry="18" fill="#fde68a" stroke="#b45309"/>
        <rect x="33" y="56" width="20" height="94" fill="#fff"/>
        <text x="108" y="34" fill="#b45309" font-size="10.5" font-weight="800">Đầu xương (xốp)</text>
        <text x="108" y="60" fill="#dc2626" font-size="10.5" font-weight="800">Vùng chuyển tiếp</text>
        <text x="108" y="106" fill="#1e293b" font-size="10.5" font-weight="800">Thân xương đặc &amp; ống tủy</text>
        <text x="108" y="150" fill="#dc2626" font-size="10.5" font-weight="800">Vùng chuyển tiếp</text>
        <text x="43" y="214" text-anchor="middle" fill="#1e293b" font-size="11.5" font-weight="800">XƯƠNG DÀI</text>
      </g>
    </svg>`,
    pins: [
      { x: 24, y: 26, label: "Xương dẹt", detail: "Hai bản xương đặc kẹp một lớp xương xốp ở giữa (một số xương dẹt đầu mặt có hốc chứa khí gọi là xoang)." },
      { x: 22, y: 74, label: "Xương ngắn", detail: "Khối xương xốp tương đối vuông vức bao quanh bởi một vỏ xương đặc mỏng." },
      { x: 75, y: 50, label: "Xương dài (3 vùng + 3 lớp thân)", detail: "2 đầu xốp (mặt khớp là sụn trong) + vùng chuyển tiếp (sụn tiếp hợp khi tăng trưởng) + thân đặc quanh ống tủy gồm 3 lớp (cơ bản ngoài, Havers đặc giữa, cơ bản trong)." }
    ],
    decoder: "Câu tự lượng giá 2 (tr.64): Màng ngoài xương KHÔNG bao phủ toàn bộ xương dài vì phía diện khớp hai đầu xương là mô sụn trong!"
  },
  {
    id: "h_5_3",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.3",
    page: 54,
    kind: "hybrid",
    stain: "Mài xương (430x) & Sơ đồ Cốt bào",
    title: "Các tế bào xương (Tạo cốt bào, Cốt bào, Ổ xương & Vi quản xương)",
    img: "assets/histology/bone_430x.jpg",
    imgCaption: "Cốt bào nằm trong các ổ xương tối xếp đồng tâm quanh ống Havers và nối nhau bằng tia vi quản xương.",
    credit: "Jlipuma1 (CC0)",
    svg: `<svg viewBox="0 0 380 232" class="fig-svg" style="background:#fef2f2">
      <!-- Top strip: Osteoblasts on osteoid -->
      <text x="190" y="14" text-anchor="middle" fill="#5b21b6" font-size="10" font-weight="800" class="svg-auto-label">Tạo cốt bào xếp hàng (nhân đối diện giá đỡ)</text>
      <rect x="14" y="20" width="352" height="60" rx="8" fill="#fff" stroke="#be185d"/>
      <rect x="26" y="51" width="328" height="22" fill="#fda4af"/>
      <text x="190" y="66" text-anchor="middle" fill="#881337" font-size="10" font-weight="800">Giá đỡ xương (Chất dạng xương đang đắp)</text>
      ${[45,85,125,165,205,245,285,325].map((x) => `<rect x="${x-14}" y="25" width="28" height="24" rx="4" fill="#c4b5fd" stroke="#5b21b6"/><circle cx="${x}" cy="32" r="4" fill="#3b0764"/>`).join("")}

      <!-- Bottom: Osteocytes in lacunae + canaliculi -->
      <rect x="14" y="92" width="352" height="128" rx="8" fill="#ffe4e6" stroke="#9f1239"/>
      <line x1="100" y1="150" x2="270" y2="150" stroke="#fff" stroke-width="10"/>
      <line x1="100" y1="150" x2="180" y2="194" stroke="#fff" stroke-width="9"/>
      <line x1="270" y1="150" x2="180" y2="194" stroke="#fff" stroke-width="9"/>
      <line x1="100" y1="150" x2="55" y2="110" stroke="#fff" stroke-width="7"/>
      <line x1="270" y1="150" x2="325" y2="110" stroke="#fff" stroke-width="7"/>
      <line x1="100" y1="150" x2="270" y2="150" stroke="#dc2626" stroke-width="3"/>
      <line x1="100" y1="150" x2="180" y2="194" stroke="#dc2626" stroke-width="3"/>
      <line x1="270" y1="150" x2="180" y2="194" stroke="#dc2626" stroke-width="3"/>
      <!-- Lacunae & Osteocytes -->
      <ellipse cx="100" cy="150" rx="30" ry="15" fill="#fff" stroke="#881337" stroke-width="2"/>
      <ellipse cx="100" cy="150" rx="18" ry="8" fill="#f472b6"/><circle cx="100" cy="150" r="4" fill="#4c0519"/>
      <ellipse cx="270" cy="150" rx="30" ry="15" fill="#fff" stroke="#881337" stroke-width="2"/>
      <ellipse cx="270" cy="150" rx="18" ry="8" fill="#f472b6"/><circle cx="270" cy="150" r="4" fill="#4c0519"/>
      <text x="185" y="127" text-anchor="middle" fill="#881337" font-size="10.5" font-weight="800" class="svg-auto-label">Vi quản xương (chứa dịch giàu Glycoprotein)</text>
      <text x="185" y="211" text-anchor="middle" fill="#881337" font-size="10" font-weight="700" class="svg-auto-label">Nhánh bào tương các cốt bào tiếp xúc nhau</text>
    </svg>`,
    pins: [
      { x: 50, y: 52, label: "Ống Havers ở trung tâm", detail: "Chứa mạch máu và mô liên kết nuôi dưỡng toàn bộ đơn vị hệ thống Havers." },
      { x: 25, y: 30, label: "Cốt bào nằm trong ổ xương", detail: "Chiếm ~10% trọng lượng xương, có nhánh bào tương mảnh đi trong các vi quản xương." },
      { x: 75, y: 76, label: "Vi quản xương giàu glycoprotein", detail: "Chứa dịch giàu glycoprotein vận chuyển dinh dưỡng và kết nối trực tiếp nhánh bào tương giữa các cốt bào." }
    ],
    decoder: "Sách tr.54 nhấn mạnh: Cốt bào (vốn từ tạo cốt bào vùi trong ổ xương) không có trung thể, liên lạc nhau qua vi quản xương giàu glycoprotein và giữ CẢ 2 chức năng đối lập: tạo duy trì nền xương vs tiêu xương bằng lysosome."
  },
  {
    id: "h_5_4",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.4",
    page: 55,
    kind: "hybrid",
    stain: "KHV Điện tử & Sơ đồ viền bàn chải",
    title: "Hủy cốt bào (Osteoclast) & Cơ chế tiêu xương bằng H⁺",
    img: "assets/histology/osteoclast.jpg",
    imgCaption: "Tế bào khổng lồ đa nhân nằm áp sát trên bề mặt vách xương đang bị tiêu hủy.",
    credit: "Robert M. Hunt (Public domain)",
    svg: `<svg viewBox="0 0 380 220" class="fig-svg" style="background:#fff">
      <!-- Bone matrix below -->
      <rect x="20" y="160" width="340" height="46" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <text x="190" y="188" text-anchor="middle" fill="#0f172a" font-size="11.5" font-weight="800">VÁCH XƯƠNG (Hydroxyapatite + Collagen I)</text>
      <!-- Giant multinucleated osteoclast like suction cup -->
      <path d="M55 160 C48 75 110 34 190 34 C270 34 332 75 325 160 L300 150 L282 162 L264 148 L246 162 L228 148 L210 162 L190 148 L170 162 L152 148 L134 162 L116 148 L98 162 L80 150 Z" fill="#fce7f3" stroke="#be185d" stroke-width="2.5"/>
      <!-- Multiple nuclei at opposite pole -->
      ${[[120,76],[165,64],[215,66],[258,78],[145,98],[195,94],[240,100]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="#9d174d"/>`).join("")}
      <!-- H+ protons & enzymes released at ruffled border -->
      <text x="190" y="138" text-anchor="middle" fill="#dc2626" font-size="11.5" font-weight="800" class="svg-auto-label">Nếp gấp viền bàn chải: tiết H⁺ &amp; Enzym</text>
      <text x="190" y="24" text-anchor="middle" fill="#9d174d" font-size="11" font-weight="800">KHỔNG LỒ ĐA NHÂN (3 – vài chục nhân ở cực đối diện)</text>
    </svg>`,
    pins: [
      { x: 52, y: 42, label: "Nhiều nhân (3 đến vài chục nhân)", detail: "Nguồn gốc từ một dòng mono bào đặc biệt trong tủy xương; các nhân dồn về cực đối diện vách xương." },
      { x: 50, y: 74, label: "Nếp gấp màng bào tương sát vách xương", detail: "Chụp lên xương như giác hút, giải phóng proton H⁺ hòa tan hydroxyapatite rồi enzym thủy phân collagen; giàu ty thể." }
    ],
    decoder: "Trình tự tiêu xương của Hủy cốt bào (tr.55): (1) Tiết proton H⁺ hòa tan khoáng hydroxyapatite trước → (2) Tách rời sợi collagen để enzym phân hủy → (3) Tái hấp thu sản phẩm giáng hóa, đưa Ca²⁺/PO₄³⁻ vào máu."
  },
  {
    id: "h_5_5",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.5",
    page: 56,
    kind: "svg",
    stain: "Sơ đồ vi thể 2 màng xương",
    title: "Xương – Màng ngoài xương & Màng trong xương",
    svg: `<svg viewBox="0 0 520 225" class="fig-svg" style="background:#fff">
      <!-- Periosteum 2 layers -->
      <rect x="20" y="16" width="480" height="36" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="260" y="38" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">Màng ngoài xương – LỚP NGOÀI (Nhiều bó sợi collagen song song)</text>
      <rect x="20" y="52" width="480" height="30" fill="#ddd6fe" stroke="#6d28d9" stroke-width="2"/>
      <text x="260" y="71" text-anchor="middle" fill="#4c1d95" font-size="11" font-weight="800">Màng ngoài xương – LỚP TRONG (TB trung mô → Tạo cốt bào đắp lá xương)</text>
      <!-- Compact bone -->
      <rect x="20" y="82" width="480" height="90" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
      ${[90,180,270,360,440].map((x) => `<ellipse cx="${x}" cy="116" rx="14" ry="6" fill="#fff" stroke="#881337"/><circle cx="${x}" cy="116" r="3" fill="#881337"/><ellipse cx="${x+30}" cy="148" rx="14" ry="6" fill="#fff" stroke="#881337"/><circle cx="${x+30}" cy="148" r="3" fill="#881337"/>`).join("")}
      <text x="260" y="132" text-anchor="middle" fill="#881337" font-size="12" font-weight="800">XƯƠNG ĐẶC (Lá xương + Cốt bào trong ổ xương)</text>
      <!-- Endosteum -->
      <rect x="20" y="172" width="480" height="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="260" y="188" text-anchor="middle" fill="#854d0e" font-size="11" font-weight="800">MÀNG TRONG XƯƠNG (Lót ống tủy, ống Havers, vách xương xốp)</text>
    </svg>`,
    pins: [
      { x: 50, y: 24, label: "Màng ngoài xương (2 lớp)", detail: "Lớp ngoài chứa nhiều bó sợi collagen song song mặt xương; lớp trong giàu TB trung mô biến thành tạo cốt bào làm tăng ĐƯỜNG KÍNH xương." },
      { x: 50, y: 82, label: "Màng trong xương", detail: "Lót lòng ống tủy, ống Havers và các vách xương xốp; tạo bởi TB trung mô và ít sợi collagen (KHÔNG phải biểu mô vuông đơn!)." }
    ],
    decoder: "Sửa bẫy Câu 4C (tr.64): Màng trong xương là MÔ LIÊN KẾT (tế bào trung mô + ít sợi collagen), hoàn toàn KHÔNG phải biểu mô vuông đơn!"
  },
  {
    id: "h_5_6",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.6",
    page: 57,
    kind: "svg",
    stain: "Sơ đồ giải phẫu mô học",
    title: "Sơ đồ cấu tạo khớp động",
    svg: `<svg viewBox="0 0 520 250" class="fig-svg" style="background:#f8fafc">
      <!-- Top & bottom bone shafts -->
      <path d="M165 14 L165 55 C140 72 136 106 195 106 C254 106 250 72 225 55 L225 14" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
      <path d="M165 236 L165 195 C140 178 136 144 195 144 C254 144 250 178 225 195 L225 236" fill="#e2e8f0" stroke="#334155" stroke-width="2.5"/>
      <!-- Spongy heads -->
      <ellipse cx="195" cy="74" rx="34" ry="22" fill="#fde68a" stroke="#b45309" stroke-dasharray="3,2"/>
      <ellipse cx="195" cy="176" rx="34" ry="22" fill="#fde68a" stroke="#b45309" stroke-dasharray="3,2"/>
      <!-- Medullary cavity -->
      <rect x="182" y="14" width="26" height="36" fill="#fff" stroke="#64748b"/>
      <rect x="182" y="200" width="26" height="36" fill="#fff" stroke="#64748b"/>
      <!-- Articular hyaline cartilage (no perichondrium) -->
      <path d="M148 96 Q195 116 242 96" stroke="#38bdf8" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M148 154 Q195 134 242 154" stroke="#38bdf8" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- Fibrous capsule & Synovial membrane -->
      <path d="M138 66 C115 95 115 155 138 184 M252 66 C275 95 275 155 252 184" stroke="#6d28d9" stroke-width="6" fill="none"/>
      <path d="M146 76 C126 100 126 150 146 174 M244 76 C264 100 264 150 244 174" stroke="#db2777" stroke-width="3" fill="none"/>
      <!-- Callout annotations -->
      <text x="295" y="40" fill="#334155" font-size="11" font-weight="800" class="svg-auto-label">1. Màng xương &amp; Ống tủy</text>
      <text x="295" y="76" fill="#be185d" font-size="11" font-weight="800" class="svg-auto-label">2. Màng hoạt dịch (TB A, B, C)</text>
      <text x="295" y="108" fill="#6d28d9" font-size="11" font-weight="800" class="svg-auto-label">3. Bao xơ (Tiểu thể Pacini, Ruffini)</text>
      <text x="295" y="134" fill="#0f766e" font-size="11" font-weight="800" class="svg-auto-label">4. Ổ khớp (Dịch khớp)</text>
      <text x="295" y="162" fill="#0284c7" font-size="11" font-weight="800" class="svg-auto-label">5. Sụn khớp (4 lớp, không màng sụn)</text>
      <text x="295" y="194" fill="#b45309" font-size="11" font-weight="800" class="svg-auto-label">6. Xương Havers xốp &amp; đặc</text>
    </svg>`,
    pins: [
      { x: 38, y: 42, label: "Sụn khớp (Sụn trong 4 lớp)", detail: "Không có màng sụn; gồm 4 lớp: bề mặt, trung gian, chính, sâu; nuôi bởi dịch khớp & xương xốp." },
      { x: 25, y: 50, label: "Màng hoạt dịch (3 loại TB) & Bao khớp", detail: "Bao khớp có tiểu thể xúc giác Pacini/Ruffini; lớp phủ màng hoạt dịch có TB A (thực bào), TB B (tiết dịch khớp & acid hyaluronic), TB C (trung gian)." }
    ],
    decoder: "Chú ý 3 loại tế bào của màng hoạt dịch (tr.57): A = tế bào khớp thực bào; B = tế bào sợi khớp tạo dịch khớp & acid hyaluronic; C = trung gian giữa A và B."
  },
  {
    id: "h_5_7",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.7",
    page: 58,
    kind: "svg",
    stain: "Tái tạo H&E Quá trình Tạo xương",
    title: "Quá trình tạo xương (TB trung mô → Tạo cốt bào → Cốt bào)",
    svg: `<svg viewBox="0 0 480 225" class="fig-svg" style="background:#fdf2f8">
      <!-- Mesenchymal zone at top -->
      <rect x="20" y="16" width="440" height="54" rx="8" fill="#fff" stroke="#cbd5e1"/>
      <ellipse cx="90" cy="40" rx="16" ry="5" fill="#7c3aed"/><ellipse cx="185" cy="46" rx="16" ry="5" fill="#7c3aed"/>
      <ellipse cx="290" cy="36" rx="16" ry="5" fill="#7c3aed"/><ellipse cx="385" cy="44" rx="16" ry="5" fill="#7c3aed"/>
      <text x="240" y="30" text-anchor="middle" fill="#6d28d9" font-size="11" font-weight="800" class="svg-auto-label">1. Tế bào trung mô biệt hóa</text>
      <!-- Osteoblasts lining newly formed osteoid/bone -->
      ${[70,120,170,220,270,320,370,415].map((x) => `<rect x="${x-15}" y="72" width="30" height="26" rx="5" fill="#a78bfa" stroke="#4c1d95" stroke-width="1.5"/><circle cx="${x}" cy="80" r="4.5" fill="#2e1065"/>`).join("")}
      <text x="240" y="114" text-anchor="middle" fill="#4c1d95" font-size="11" font-weight="800" class="svg-auto-label">2. Tạo cốt bào xếp hàng đắp chất dạng xương</text>
      <!-- Calcified bone matrix containing trapped osteocytes -->
      <rect x="20" y="118" width="440" height="58" rx="8" fill="#db2777" stroke="#831843" stroke-width="2"/>
      <ellipse cx="130" cy="146" rx="18" ry="8" fill="#fff"/><circle cx="130" cy="146" r="4" fill="#4c0519"/>
      <ellipse cx="260" cy="146" rx="18" ry="8" fill="#fff"/><circle cx="260" cy="146" r="4" fill="#4c0519"/>
      <ellipse cx="370" cy="146" rx="18" ry="8" fill="#fff"/><circle cx="370" cy="146" r="4" fill="#4c0519"/>
      <text x="240" y="168" text-anchor="middle" fill="#fff" font-size="11" font-weight="800">3. Cốt bào tự vùi trong ổ xương</text>
      <!-- Blood vessel -->
      <rect x="20" y="182" width="440" height="28" rx="14" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
      <text x="240" y="200" text-anchor="middle" fill="#9f1239" font-size="11" font-weight="800">4. Mạch máu mang dinh dưỡng &amp; TB trung mô</text>
    </svg>`,
    pins: [
      { x: 50, y: 18, label: "Tế bào trung mô", detail: "Tế bào gốc trung mô di cư tới vùng tạo xương và biệt hóa thành tạo cốt bào." },
      { x: 50, y: 40, label: "Tạo cốt bào xếp hàng", detail: "Tổng hợp chất dạng xương (chất hữu cơ tiền xương) và khởi phát canxi hóa." },
      { x: 54, y: 65, label: "Cốt bào trong ổ xương", detail: "Tạo cốt bào sau khi tự tạo chất nền vây quanh mình sẽ trở thành cốt bào." }
    ],
    decoder: "Sơ đồ trực quan hóa quá trình chuyển tiếp liên tục: TB trung mô → Tạo cốt bào xếp hàng trên giá đỡ → Cốt bào vùi trong chất nền mới tạo, luôn đi kèm mạch máu nuôi dưỡng."
  },
  {
    id: "h_5_8",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.8",
    page: 59,
    kind: "svg",
    stain: "Sơ đồ 6 giai đoạn A–F & Sụn tiếp hợp",
    title: "Sự phát triển chiều dài của xương (Cốt hóa trong sụn)",
    svg: `<svg viewBox="0 0 560 250" class="fig-svg" style="background:#fff">
      <!-- 6 steps A..F -->
      ${[
        ["A. Sụn trong","#e9d5ff","#7c3aed","Mô hình sụn"],
        ["B. Phì đại giữa","#ddd6fe","#dc2626","Canxi hóa tâm"],
        ["C. Bao xương","#fbcfe8","#9d174d","Màng ngoài xương"],
        ["D. Xâm nhập mạch","#fed7aa","#ea580c","Tạo hốc trung tâm"],
        ["E. Vách xương sụn","#bae6fd","#0284c7","Đắp lên vách sụn"],
        ["F. Ống tủy","#fef08a","#ca8a04","Hủy cốt bào mở rộng"]
      ].map(([t,bg,col,sub],i) => {
        const x = 14 + i*90;
        return `<rect x="${x}" y="14" width="84" height="106" rx="8" fill="#f8fafc" stroke="${col}"/>
                <text x="${x+42}" y="30" text-anchor="middle" fill="${col}" font-size="9.5" font-weight="800">${t}</text>
                <path d="M${x+30} 42 C${x+22} 42 ${x+22} 54 ${x+30} 56 L${x+30} 86 C${x+22} 88 ${x+22} 100 ${x+30} 100 L${x+54} 100 C${x+62} 100 ${x+62} 88 ${x+54} 86 L${x+54} 56 C${x+62} 54 ${x+62} 42 ${x+54} 42 Z" fill="${bg}" stroke="${col}" stroke-width="1.8"/>
                ${i>=1 ? `<rect x="${x+32}" y="62" width="20" height="18" fill="${i>=3 ? '#fff' : '#fca5a5'}" stroke="${col}"/>` : ""}
                ${i>=2 ? `<line x1="${x+28}" y1="58" x2="${x+28}" y2="84" stroke="#0f172a" stroke-width="3"/><line x1="${x+56}" y1="58" x2="${x+56}" y2="84" stroke="#0f172a" stroke-width="3"/>` : ""}
                <text x="${x+42}" y="114" text-anchor="middle" fill="#475569" font-size="8.5" font-weight="700" class="svg-auto-label">${sub}</text>`;
      }).join("")}

      <!-- Epiphyseal plate 4 zones below -->
      <rect x="14" y="132" width="532" height="106" rx="10" fill="#fdf4ff" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="280" y="150" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">4 VÙNG CỦA SỤN TIẾP HỢP (Từ Đầu xương → Thân xương)</text>
      <rect x="28" y="164" width="118" height="58" rx="6" fill="#ede9fe" stroke="#6d28d9"/>
      <text x="87" y="188" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">1. Sụn trong</text>
      <text x="87" y="206" text-anchor="middle" fill="#6b21a8" font-size="9">TB sụn dự trữ</text>

      <rect x="158" y="164" width="118" height="58" rx="6" fill="#ddd6fe" stroke="#6d28d9"/>
      <text x="217" y="188" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="800">2. Sụn xếp hàng</text>
      <text x="217" y="206" text-anchor="middle" fill="#6b21a8" font-size="9">Sinh sản kiểu trục</text>

      <rect x="288" y="164" width="118" height="58" rx="6" fill="#fbcfe8" stroke="#be185d"/>
      <text x="347" y="188" text-anchor="middle" fill="#9d174d" font-size="10.5" font-weight="800">3. Sụn phì đại</text>
      <text x="347" y="206" text-anchor="middle" fill="#831843" font-size="9">Tiết enzym → thoái hóa</text>

      <rect x="418" y="164" width="114" height="58" rx="6" fill="#fee2e2" stroke="#dc2626"/>
      <text x="475" y="188" text-anchor="middle" fill="#991b1b" font-size="10.5" font-weight="800">4. Xâm nhập mạch</text>
      <text x="475" y="206" text-anchor="middle" fill="#7f1d1d" font-size="9">Canxi hóa &amp; Tạo xương</text>
    </svg>`,
    pins: [
      { x: 50, y: 28, label: "6 bước cốt hóa trong sụn (A–F)", detail: "Miếng sụn trong (A) → phì đại trung tâm (B) → màng sụn thành màng ngoài xương đắp bao xương (C) → mạch máu xâm nhập (D) → đắp vách xương trong sụn (E) → hủy cốt bào tạo ống tủy (F)." },
      { x: 50, y: 78, label: "4 lớp sụn tiếp hợp vùng chuyển tiếp", detail: "Thứ tự từ đầu về thân: (1) Sụn trong → (2) Sụn xếp hàng → (3) Sụn phì đại (khởi phát canxi hóa rồi tự tiêu) → (4) Vùng xâm nhập mạch máu – mô liên kết." }
    ],
    decoder: "Thứ tự 4 lớp sụn tiếp hợp và 6 bước A–F là kiến thức cốt lõi nhất về sự phát triển chiều dài xương dài (tr. 59–60)."
  },
  {
    id: "h_5_9",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.9",
    page: 60,
    kind: "svg",
    stain: "Sơ đồ Tu sửa Havers (A–D)",
    title: "Sự phát triển của xương & Hoạt động tu sửa Havers (Xương thứ phát)",
    svg: `<svg viewBox="0 0 560 225" class="fig-svg" style="background:#f8fafc">
      <text x="280" y="22" text-anchor="middle" fill="#5b21b6" font-size="12" font-weight="800">TU SỬA HAVERS: CHUYỂN XƯƠNG NGUYÊN PHÁT → XƯƠNG ĐẶC THỨ PHÁT</text>
      ${[
        ["D. Hốc tiêu xương",42,"#fecdd3","#dc2626","Hủy cốt bào khoét đường hầm"],
        ["C. Viền tiền cốt",176,"#bae6fd","#0284c7","Mạch máu + đắp lá đầu tiên"],
        ["B. Đắp thêm lá",310,"#ddd6fe","#6d28d9","Thu hẹp dần lòng ống Havers"],
        ["A. Hệ thống hoàn chỉnh",444,"#dcfce7","#16a34a","Đường xi măng bao ngoài"]
      ].map(([title,x,bg,col,sub],idx) => `
        <rect x="${x-26}" y="38" width="122" height="172" rx="10" fill="#fff" stroke="${col}" stroke-width="1.5"/>
        <text x="${x+35}" y="58" text-anchor="middle" fill="${col}" font-size="10.2" font-weight="800">${title}</text>
        <circle cx="${x+35}" cy="118" r="40" fill="${bg}" stroke="${col}" stroke-width="2.5" stroke-dasharray="${idx===0 ? '6,3' : '0'}"/>
        ${idx>=1 ? `<circle cx="${x+35}" cy="118" r="30" fill="#fff" stroke="${col}" stroke-width="2"/>` : ""}
        ${idx>=2 ? `<circle cx="${x+35}" cy="118" r="20" fill="${bg}" stroke="${col}" stroke-width="1.8"/>` : ""}
        ${idx===3 ? `<circle cx="${x+35}" cy="118" r="10" fill="#dc2626"/>` : `<circle cx="${x+35}" cy="118" r="7" fill="#dc2626" opacity="${idx===0 ? 0.2 : 0.8}"/>`}
        <text x="${x+35}" y="182" text-anchor="middle" fill="#334155" font-size="9.2" font-weight="700" class="svg-auto-label">${sub}</text>
      `).join("")}
    </svg>`,
    pins: [
      { x: 14, y: 50, label: "Giai đoạn D: Hốc tiêu xương", detail: "Hủy cốt bào khoét đường hầm tạo lỗ lớn bờ ngoằn ngoèo trong mô xương." },
      { x: 40, y: 50, label: "Giai đoạn C → B: Đắp lá xương hướng tâm", detail: "Mạch máu kéo tế bào trung mô vào tựa lên vách hốc → tạo cốt bào đắp lá xương đầu tiên (viền tiền cốt) rồi đắp dần vào trong." },
      { x: 86, y: 50, label: "Giai đoạn A: Hệ thống Havers hoàn chỉnh", detail: "Ranh giới ngoài cùng là ĐƯỜNG XI MĂNG ngoằn ngoèo (vết tích vách hốc tiêu xương), ống Havers hẹp ở giữa." }
    ],
    decoder: "Ghi nhớ chiều tiến triển trong Tu sửa Havers: Đắp từ NGOÀI vào TRONG (lá ngoài cùng già nhất đã canxi hóa đầy đủ, lá trong cùng sát ống Havers mới nhất còn là chất dạng xương); giới hạn ngoài gọi là ĐƯỜNG XI MĂNG."
  },
  {
    id: "h_5_10",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.10",
    page: 61,
    kind: "svg",
    stain: "Sơ đồ sinh hóa khoáng hóa",
    title: "Cơ chế ngấm canxi tạo tinh thể Hydroxyapatite",
    svg: `<svg viewBox="0 0 500 200" class="fig-svg" style="background:#fff">
      <rect x="20" y="34" width="125" height="60" rx="28" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
      <text x="82" y="60" text-anchor="middle" fill="#4c1d95" font-size="11.5" font-weight="800">Tạo cốt bào / Cốt bào</text>
      <text x="82" y="78" text-anchor="middle" fill="#5b21b6" font-size="10.5">Ca²⁺ + Protein</text>

      <path d="M145 64 L220 64" stroke="#6d28d9" stroke-width="2.5"/>
      <polygon points="216,58 228,64 216,70" fill="#6d28d9"/>
      <text x="184" y="52" text-anchor="middle" fill="#4c1d95" font-size="9.5" font-weight="700">Giải phóng</text>

      <rect x="228" y="34" width="130" height="54" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="293" y="57" text-anchor="middle" fill="#92400e" font-size="11" font-weight="800">Ca²⁺ + PO₄³⁻ ngoại bào</text>
      <text x="293" y="75" text-anchor="middle" fill="#b45309" font-size="9.5">(Tách khỏi protein)</text>

      <path d="M293 88 L293 122" stroke="#d97706" stroke-width="2.5"/>
      <polygon points="287,118 293,130 299,118" fill="#d97706"/>

      <rect x="210" y="130" width="166" height="48" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
      <text x="293" y="150" text-anchor="middle" fill="#9d174d" font-size="10.5" font-weight="800">Thành phần vô định hình</text>
      <text x="293" y="168" text-anchor="middle" fill="#831843" font-size="10">Ca₉(PO₄)₆</text>

      <path d="M376 154 L408 154 L408 92" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <rect x="378" y="34" width="108" height="58" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="432" y="56" text-anchor="middle" fill="#166534" font-size="10.5" font-weight="800">Tinh thể</text>
      <text x="432" y="72" text-anchor="middle" fill="#14532d" font-size="9.5" font-weight="800">Hydroxyapatite</text>
      <text x="432" y="86" text-anchor="middle" fill="#14532d" font-size="9">Ca₅(PO₄)₃OH</text>
    </svg>`,
    pins: [
      { x: 58, y: 74, label: "Thành phần vô định hình Ca₉(PO₄)₆", detail: "Ion Ca²⁺ giải phóng từ tạo cốt bào/cốt bào gắn với PO₄³⁻ ngoại bào tạo muối phốt phát canxi không tan." },
      { x: 86, y: 32, label: "Tinh thể Hydroxyapatite Ca₅(PO₄)₃OH", detail: "Hình thành qua 2 bước: tạo nhân (trụ bình hành) và bồi tụ (tiêu thụ ngay 75% muối sẵn có ban đầu, hoàn tất sau nhiều tuần)." }
    ],
    decoder: "Nhớ đúng 2 công thức hóa học trong sách (tr. 56 & 61): vô định hình = Ca₉(PO₄)₆; tinh thể hydroxyapatite = Ca₅(PO₄)₃OH (hình que hoặc ống)."
  },
  {
    id: "h_5_11",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.11",
    page: 61,
    kind: "svg",
    stain: "Sơ đồ lâm sàng Nhi khoa",
    title: "Bệnh còi xương (Rickets / Rachitis – Thiếu Vitamin D & Canxi)",
    svg: `<svg viewBox="0 0 480 235" class="fig-svg" style="background:#fff">
      <!-- Child outline showing rickets deformities -->
      <circle cx="140" cy="48" r="24" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
      <path d="M132 24 L148 24" stroke="#dc2626" stroke-width="4"/>
      <!-- Rib cage with rachitic rosary -->
      <rect x="112" y="78" width="56" height="62" rx="10" fill="#fff" stroke="#92400e" stroke-width="2"/>
      <circle cx="122" cy="94" r="3.5" fill="#dc2626"/><circle cx="122" cy="108" r="3.5" fill="#dc2626"/><circle cx="122" cy="122" r="3.5" fill="#dc2626"/>
      <circle cx="158" cy="94" r="3.5" fill="#dc2626"/><circle cx="158" cy="108" r="3.5" fill="#dc2626"/><circle cx="158" cy="122" r="3.5" fill="#dc2626"/>
      <!-- Bowed arms & legs -->
      <path d="M112 86 Q86 112 98 142" stroke="#92400e" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M168 86 Q194 112 182 142" stroke="#92400e" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M124 142 Q104 182 124 218" stroke="#92400e" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M156 142 Q176 182 156 218" stroke="#92400e" stroke-width="9" fill="none" stroke-linecap="round"/>
      <circle cx="113" cy="182" r="6" fill="#dc2626"/><circle cx="167" cy="182" r="6" fill="#dc2626"/>
      <!-- Labels -->
      <text x="235" y="34" fill="#dc2626" font-size="11.5" font-weight="800">5 DẤU HIỆU ĐIỂN HÌNH BỆNH CÒI XƯƠNG:</text>
      <text x="235" y="62" fill="#1e293b" font-size="11" font-weight="700">1. Thóp chậm đóng (vòm sọ mềm)</text>
      <text x="235" y="92" fill="#1e293b" font-size="11" font-weight="700">2. Xương sườn lõm &amp; Chuỗi hạt sườn</text>
      <text x="235" y="122" fill="#1e293b" font-size="11" font-weight="700">3. Tay cong (do giảm độ cứng vô cơ)</text>
      <text x="235" y="152" fill="#1e293b" font-size="11" font-weight="700">4. Khớp sưng (phì đại đầu xương vùng chuyển tiếp)</text>
      <text x="235" y="182" fill="#1e293b" font-size="11" font-weight="700">5. Chân cong (chữ O / chữ X khi chịu trọng lực)</text>
      <text x="235" y="214" fill="#0369a1" font-size="10.5" font-weight="800">Cơ chế: Hữu cơ bình thường nhưng GIẢM VÔI HÓA</text>
    </svg>`,
    pins: [
      { x: 30, y: 20, label: "Thóp chậm đóng & Chuỗi hạt sườn", detail: "Thiếu vitamin D / Ca ở trẻ em làm vôi hóa kém → đầu sụn sườn phì đại tạo chuỗi hạt sườn." },
      { x: 28, y: 76, label: "Chân cong & Khớp sưng", detail: "Xương vẫn phát triển phần hữu cơ nhưng ít khoáng cứng nên bị cong biến dạng dưới trọng lực." }
    ],
    decoder: "Còi xương (trẻ em) và Nhuyễn xương (người lớn) có chung bản chất thiếu Vitamin D/Canxi: phần hữu cơ bình thường hoặc tăng nhưng lắng đọng vô cơ kém → xương mềm cong!"
  },
  {
    id: "h_5_12",
    chapter: 5,
    lessonId: 8,
    code: "Hình 5.12 & Biểu đồ",
    page: "62–63",
    kind: "svg",
    stain: "Lâm sàng Scocbut & Biểu đồ tr. 63",
    title: "Bệnh Scocbut (Scurvy) & Biểu đồ So sánh Bình thường – Loãng xương – Nhuyễn xương",
    svg: `<svg viewBox="0 0 560 265" class="fig-svg" style="background:#fff">
      <!-- Left: Scurvy -->
      <rect x="12" y="14" width="174" height="236" rx="10" fill="#fff7ed" stroke="#ea580c"/>
      <text x="99" y="34" text-anchor="middle" fill="#9a3412" font-size="11.5" font-weight="800">BỆNH SCOCBUT (Thiếu Vit C)</text>
      <circle cx="99" cy="84" r="28" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
      <circle cx="88" cy="78" r="4" fill="#1e293b"/><circle cx="110" cy="78" r="4" fill="#1e293b"/>
      <path d="M84 98 L114 98" stroke="#dc2626" stroke-width="4"/>
      <text x="99" y="136" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="700" class="svg-auto-label">• Da tái do thiếu máu</text>
      <text x="99" y="154" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="700" class="svg-auto-label">• Chảy máu chân răng</text>
      <text x="99" y="172" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="700" class="svg-auto-label">• Mắt trũng</text>
      <text x="99" y="204" text-anchor="middle" fill="#b91c1c" font-size="9.5" font-weight="800">Giảm HỮU CƠ (collagen),</text>
      <text x="99" y="220" text-anchor="middle" fill="#b91c1c" font-size="9.5" font-weight="800">KHÔNG giảm nhiễm canxi!</text>

      <!-- Right: Page 63 Pie Comparison -->
      <rect x="198" y="14" width="350" height="236" rx="10" fill="#f8fafc" stroke="#6d28d9"/>
      <text x="373" y="34" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">BIỂU ĐỒ TỶ LỆ VÔ CƠ (Xanh) vs HỮU CƠ (Vàng) – Tr. 63</text>
      <!-- Pie 1: Normal (70% inorganic, 30% organic) -->
      <g transform="translate(260,104)">
        <circle cx="0" cy="0" r="38" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
        <path d="M0 0 L0 -38 A38 38 0 0 1 36 -12 Z" fill="#fde047" stroke="#854d0e"/>
        <text x="0" y="54" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="800">Bình thường</text>
        <text x="0" y="68" text-anchor="middle" fill="#475569" font-size="9">70% VC • 30% HC</text>
      </g>
      <!-- Pie 2: Osteoporosis (smaller overall, same ratio) -->
      <g transform="translate(373,104)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#94a3b8" stroke-dasharray="4,3"/>
        <circle cx="0" cy="0" r="24" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
        <path d="M0 0 L0 -24 A24 24 0 0 1 22 -8 Z" fill="#fde047" stroke="#854d0e"/>
        <text x="0" y="54" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="800">Loãng xương</text>
        <text x="0" y="68" text-anchor="middle" fill="#dc2626" font-size="9">Giảm CẢ HAI (tỷ lệ giữ)</text>
      </g>
      <!-- Pie 3: Osteomalacia (more yellow organic, less blue inorganic) -->
      <g transform="translate(486,104)">
        <circle cx="0" cy="0" r="38" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
        <path d="M0 0 L-22 -31 A38 38 0 0 1 34 16 Z" fill="#fde047" stroke="#854d0e"/>
        <text x="0" y="54" text-anchor="middle" fill="#d97706" font-size="10" font-weight="800">Nhuyễn xương</text>
        <text x="0" y="68" text-anchor="middle" fill="#b45309" font-size="9">Giảm VC • Tăng HC</text>
      </g>
      <text x="373" y="210" text-anchor="middle" fill="#1e293b" font-size="9.8" font-weight="700" class="svg-auto-label">Loãng xương: Nữ mãn kinh, già, corticoid • Nhuyễn xương: Thiếu Vit D, Ca</text>
    </svg>`,
    pins: [
      { x: 18, y: 50, label: "Bệnh Scocbut (Thiếu Vitamin C)", detail: "Giảm tổng hợp chất hữu cơ (collagen, chất căn bản) nhưng sự nhiễm canxi vẫn bình thường → xương mỏng dễ gãy, chảy máu chân răng, da tái." },
      { x: 66, y: 45, label: "Loãng xương (Osteoporosis)", detail: "Khối lượng xương giảm đều (giảm CẢ vô cơ lẫn hữu cơ) nhưng TỶ LỆ vô cơ/hữu cơ không đổi!" },
      { x: 86, y: 45, label: "Nhuyễn xương (Osteomalacia)", detail: "Giảm vô cơ (lắng đọng không hoàn toàn do thiếu Vit D/Ca) và tăng chất dạng xương hữu cơ chưa vôi hóa." }
    ],
    decoder: "Biểu đồ tr.63 cực hay ra thi phân biệt: Loãng xương = giảm khối lượng toàn phần nhưng TỶ LỆ không đổi; Nhuyễn xương = giảm vô cơ + tăng hữu cơ; Scocbut = giảm hữu cơ mà không giảm nhiễm canxi!"
  }
];
