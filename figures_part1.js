// ==========================================================================
// THƯ VIỆN HÌNH VẼ, SƠ ĐỒ & TIÊU BẢN PHẦN 1: CHƯƠNG BIỂU MÔ (HÌNH 2.1 → 2.25)
// Đầy đủ toàn bộ 25 hình trong sách Mô học – PGS.TS. Trần Công Toại (tr. 18–31)
// ==========================================================================

window.HISTO_FIGURES_1 = [
  {
    id: "h_2_1",
    chapter: 2,
    lessonId: 1,
    code: "Hình 2.1",
    page: 18,
    kind: "svg",
    stain: "KHV Điện tử xuyên (TEM)",
    title: "Liên kết tế bào chứa siêu sợi keratin (Tế bào biểu mô)",
    svg: `<svg viewBox="0 0 540 240" class="fig-svg" style="background:#1e1b2e">
      <rect x="0" y="0" width="540" height="240" fill="#1b1826"/>
      <!-- Cell 1 & Cell 2 membranes -->
      <path d="M10 75 Q180 65 360 55 L530 48" stroke="#cbd5e1" stroke-width="3" fill="none"/>
      <path d="M10 92 Q180 82 360 72 L530 66" stroke="#cbd5e1" stroke-width="3" fill="none"/>
      <!-- Basal membrane / lower cell boundary -->
      <path d="M30 212 Q210 198 520 185" stroke="#e2e8f0" stroke-width="4" fill="none"/>
      <!-- Nucleus (large oval granular) -->
      <ellipse cx="185" cy="148" rx="125" ry="48" fill="#475569" stroke="#cbd5e1" stroke-width="2.5"/>
      <circle cx="145" cy="142" r="16" fill="#334155"/>
      <text x="185" y="152" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">Nhân tế bào biểu mô</text>
      <!-- Desmosome plaques -->
      <rect x="110" y="64" width="38" height="22" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
      <rect x="265" y="55" width="38" height="22" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
      <rect x="425" y="47" width="38" height="22" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
      <!-- Keratin tonofilaments radiating -->
      <path d="M55 62 L112 72 M52 75 L112 77 M148 72 L266 64 M148 79 L240 88 M303 63 L426 57 M303 70 L390 88" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6,2"/>
      <!-- Red arrows (desmosomes) & white arrow (basal lamina) -->
      <text x="129" y="45" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="800" class="svg-auto-label">Thể liên kết</text>
      <text x="345" y="40" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="800" class="svg-auto-label">Siêu sợi keratin</text>
      <text x="275" y="228" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="800" class="svg-auto-label">Màng đáy ngăn mô liên kết</text>
    </svg>`,
    pins: [
      { x: 24, y: 31, label: "Thể liên kết (Desmosome – mũi tên đỏ)", detail: "Vùng màng đối diện hai tế bào có tấm bào tương đặc sẫm gắn chặt hai tế bào lại với nhau." },
      { x: 64, y: 27, label: "Bó siêu sợi keratin (đầu mũi tên đỏ)", detail: "Các siêu sợi trung gian keratin (tơ trương lực) đặc trưng của bào tương tế bào biểu mô neo vào tấm bào tương của desmosome." },
      { x: 51, y: 80, label: "Màng đáy (mũi tên trắng)", detail: "Lớp cấu trúc gian bào mảnh ngăn cách tế bào biểu mô với mô đệm bên dưới." }
    ],
    decoder: "Ảnh TEM kinh điển mở đầu bài Biểu mô chứng minh 3 ý trong định nghĩa: (1) tế bào sát nhau hầu như không có khoảng gian bào rộng, (2) bào tương giàu siêu sợi keratin, (3) gắn chặt qua thể liên kết và tựa trên màng đáy."
  },
  {
    id: "h_2_2",
    chapter: 2,
    lessonId: 1,
    code: "Hình 2.2",
    page: 19,
    kind: "svg",
    stain: "Sơ đồ đối chiếu",
    title: "Tuyến nội tiết – ngoại tiết",
    svg: `<svg viewBox="0 0 560 230" class="fig-svg" style="background:#fffdf9">
      <!-- Exocrine gland -->
      <rect x="12" y="14" width="260" height="202" rx="12" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
      <text x="142" y="34" text-anchor="middle" fill="#9a3412" font-size="13" font-weight="800">TUYẾN NGOẠI TIẾT</text>
      <!-- Surface epithelium & duct -->
      <path d="M35 65 L118 65 L118 115 C95 125 90 165 142 175 C194 165 189 125 166 115 L166 65 L248 65" fill="none" stroke="#c2410c" stroke-width="3"/>
      <!-- Secretory cells lining acinus -->
      <circle cx="115" cy="140" r="8" fill="#fdba74" stroke="#9a3412"/>
      <circle cx="122" cy="158" r="8" fill="#fdba74" stroke="#9a3412"/>
      <circle cx="142" cy="166" r="8" fill="#fdba74" stroke="#9a3412"/>
      <circle cx="162" cy="158" r="8" fill="#fdba74" stroke="#9a3412"/>
      <circle cx="169" cy="140" r="8" fill="#fdba74" stroke="#9a3412"/>
      <!-- Duct cells -->
      <rect x="122" y="72" width="12" height="14" fill="#fed7aa" stroke="#9a3412"/>
      <rect x="122" y="88" width="12" height="14" fill="#fed7aa" stroke="#9a3412"/>
      <rect x="150" y="72" width="12" height="14" fill="#fed7aa" stroke="#9a3412"/>
      <rect x="150" y="88" width="12" height="14" fill="#fed7aa" stroke="#9a3412"/>
      <!-- Secretion arrow out -->
      <path d="M142 148 L142 54" stroke="#db2777" stroke-width="3" marker-end="url(#arr)"/>
      <circle cx="136" cy="46" r="4" fill="#db2777"/><circle cx="148" cy="44" r="4" fill="#db2777"/>
      <text x="142" y="198" text-anchor="middle" fill="#7c2d12" font-size="11" font-weight="700" class="svg-auto-label">Có ống bài xuất đổ ra bề mặt / môi trường ngoài</text>

      <!-- Endocrine gland -->
      <rect x="288" y="14" width="260" height="202" rx="12" fill="#fef2f2" stroke="#e11d48" stroke-width="1.5"/>
      <text x="418" y="34" text-anchor="middle" fill="#9f1239" font-size="13" font-weight="800">TUYẾN NỘI TIẾT</text>
      <!-- Capillary wrapping endocrine cluster -->
      <path d="M368 65 C330 85 330 165 380 180 C430 192 475 160 470 105 C466 75 440 55 418 55" fill="none" stroke="#e11d48" stroke-width="10" opacity="0.75"/>
      <!-- Endocrine cells -->
      <ellipse cx="406" cy="115" rx="34" ry="44" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
      <circle cx="395" cy="95" r="7" fill="#92400e"/><circle cx="416" cy="100" r="7" fill="#92400e"/>
      <circle cx="395" cy="122" r="7" fill="#92400e"/><circle cx="418" cy="128" r="7" fill="#92400e"/>
      <!-- Hormones directly into capillary -->
      <circle cx="364" cy="112" r="3" fill="#7c3aed"/><circle cx="362" cy="130" r="3" fill="#7c3aed"/><circle cx="372" cy="148" r="3" fill="#7c3aed"/>
      <text x="418" y="198" text-anchor="middle" fill="#881337" font-size="11" font-weight="700" class="svg-auto-label">Không ống dẫn • Hormon tiết thẳng vào mao mạch</text>
    </svg>`,
    pins: [
      { x: 25, y: 40, label: "Phần bài xuất (Tuyến ngoại tiết)", detail: "Hệ thống ống dẫn nối từ phần chế tiết đổ sản phẩm ra bề mặt biểu mô phủ hoặc khoang cơ thể." },
      { x: 25, y: 67, label: "Phần chế tiết (Tuyến ngoại tiết)", detail: "Tế bào tuyến phân cực rõ (cực đáy có nhân, cực đỉnh hướng vào lòng chứa chất tiết)." },
      { x: 73, y: 50, label: "Đám tế bào & Mao mạch (Tuyến nội tiết)", detail: "Không có ống bài xuất; tế bào tiếp xúc chặt chẽ lưới mao mạch để đổ hormon trực tiếp vào máu." }
    ],
    decoder: "Sự khác biệt bản chất nhất: Tuyến ngoại tiết giữ ống nối lên bề mặt (còn phần bài xuất + phần chế tiết), còn tuyến nội tiết đứt mất liên hệ với biểu mô phủ nên tiết hormon thẳng vào mao mạch."
  },
  {
    id: "h_2_3",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.3",
    page: 19,
    kind: "svg",
    stain: "Sơ đồ phân loại",
    title: "Các loại biểu mô phủ theo số lớp & hình dạng tế bào bề mặt",
    svg: `<svg viewBox="0 0 560 250" class="fig-svg" style="background:#f8fafc">
      <!-- Đơn tầng -->
      <rect x="16" y="14" width="250" height="100" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="141" y="34" text-anchor="middle" fill="#6d28d9" font-size="12.5" font-weight="800">1. ĐƠN TẦNG (1 lớp tế bào)</text>
      <g transform="translate(55,44)">
        <rect x="0" y="0" width="38" height="50" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/>
        <ellipse cx="19" cy="34" rx="7" ry="10" fill="#7c3aed"/>
        <rect x="40" y="0" width="38" height="50" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/>
        <ellipse cx="59" cy="34" rx="7" ry="10" fill="#7c3aed"/>
        <rect x="80" y="0" width="38" height="50" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/>
        <ellipse cx="99" cy="34" rx="7" ry="10" fill="#7c3aed"/>
        <rect x="120" y="0" width="38" height="50" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/>
        <ellipse cx="139" cy="34" rx="7" ry="10" fill="#7c3aed"/>
      </g>
      <!-- Đa tầng -->
      <rect x="292" y="14" width="250" height="100" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="417" y="34" text-anchor="middle" fill="#db2777" font-size="12.5" font-weight="800">2. ĐA TẦNG (nhiều lớp tế bào)</text>
      <g transform="translate(335,44)">
        <rect x="0" y="34" width="160" height="18" fill="#fce7f3" stroke="#be185d"/>
        <rect x="0" y="18" width="160" height="16" fill="#fbcfe8" stroke="#be185d"/>
        <rect x="0" y="4" width="160" height="14" fill="#f9a8d4" stroke="#be185d"/>
        <circle cx="28" cy="43" r="4" fill="#831843"/><circle cx="78" cy="43" r="4" fill="#831843"/><circle cx="128" cy="43" r="4" fill="#831843"/>
        <circle cx="48" cy="26" r="4" fill="#831843"/><circle cx="105" cy="26" r="4" fill="#831843"/>
        <ellipse cx="38" cy="11" rx="8" ry="3" fill="#831843"/><ellipse cx="118" cy="11" rx="8" ry="3" fill="#831843"/>
      </g>
      <!-- 3 Hình dạng lớp nông nhất -->
      <rect x="16" y="128" width="526" height="108" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="279" y="148" text-anchor="middle" fill="#0f172a" font-size="12.5" font-weight="800">PHÂN THEO HÌNH DẠNG TẾ BÀO LỚP NÔNG NHẤT</text>
      <!-- Trụ -->
      <g transform="translate(55,158)">
        <rect x="0" y="0" width="22" height="48" fill="#ddd6fe" stroke="#5b21b6"/>
        <ellipse cx="11" cy="34" rx="5" ry="9" fill="#4c1d95"/>
        <rect x="23" y="0" width="22" height="48" fill="#ddd6fe" stroke="#5b21b6"/>
        <ellipse cx="34" cy="34" rx="5" ry="9" fill="#4c1d95"/>
        <rect x="46" y="0" width="22" height="48" fill="#ddd6fe" stroke="#5b21b6"/>
        <ellipse cx="57" cy="34" rx="5" ry="9" fill="#4c1d95"/>
        <text x="34" y="65" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">Trụ (Cao &gt; Rộng)</text>
      </g>
      <!-- Vuông -->
      <g transform="translate(220,174)">
        <rect x="0" y="0" width="32" height="32" fill="#bae6fd" stroke="#0369a1"/>
        <circle cx="16" cy="16" r="6" fill="#0c4a6e"/>
        <rect x="33" y="0" width="32" height="32" fill="#bae6fd" stroke="#0369a1"/>
        <circle cx="49" cy="16" r="6" fill="#0c4a6e"/>
        <rect x="66" y="0" width="32" height="32" fill="#bae6fd" stroke="#0369a1"/>
        <circle cx="82" cy="16" r="6" fill="#0c4a6e"/>
        <text x="49" y="49" text-anchor="middle" fill="#0369a1" font-size="11.5" font-weight="800">Vuông (Cao ≈ Rộng)</text>
      </g>
      <!-- Lát -->
      <g transform="translate(385,190)">
        <ellipse cx="32" cy="8" rx="32" ry="8" fill="#fecdd3" stroke="#be123c"/>
        <ellipse cx="32" cy="8" rx="10" ry="3.5" fill="#881337"/>
        <ellipse cx="98" cy="8" rx="32" ry="8" fill="#fecdd3" stroke="#be123c"/>
        <ellipse cx="98" cy="8" rx="10" ry="3.5" fill="#881337"/>
        <text x="65" y="33" text-anchor="middle" fill="#be123c" font-size="11.5" font-weight="800">Lát (Dẹt, mỏng)</text>
      </g>
    </svg>`,
    pins: [
      { x: 25, y: 30, label: "Đơn tầng", detail: "Chỉ gồm 1 lớp tế bào tựa trên màng đáy (lát đơn, vuông đơn, trụ đơn, trụ giả tầng)." },
      { x: 75, y: 30, label: "Đa tầng", detail: "Gồm nhiều lớp tế bào chồng lên nhau; tên gọi lấy theo HÌNH DẠNG LỚP NÔNG NHẤT." },
      { x: 50, y: 78, label: "3 hình dạng chuẩn", detail: "Trụ (cao > rộng), Vuông (cao ≈ rộng), Lát (dẹt, nhân dẹt)." }
    ],
    decoder: "Mẹo ghi nhớ hệ thống phân loại: 4 loại đơn (lát đơn, vuông đơn, trụ đơn, trụ giả tầng) + 5 loại tầng (lát tầng sừng hóa, lát tầng không sừng, vuông tầng, trụ tầng, biểu mô niệu)."
  },
  {
    id: "h_2_4",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.4",
    page: 20,
    kind: "micrograph",
    stain: "Ngấm bạc (nhìn mặt) / H&E",
    title: "Biểu mô lát đơn",
    img: "assets/histology/simple_squamous.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 46, y: 45, label: "Tế bào biểu mô lát đơn (đa diện dẹt)", detail: "Tế bào dẹt, mỏng, nhìn từ bề mặt thấy hình đa diện bờ không đều lát như gạch nền." },
      { x: 64, y: 63, label: "Ranh giới liên kết gian bào", detail: "Đường viền tối mảnh do các tế bào lát đơn áp sát và liên kết chặt với nhau." },
      { x: 38, y: 66, label: "Nhân tế bào lát đơn", detail: "Mỗi tế bào có 1 nhân dẹt nằm ở trung tâm (trên lát cắt đứng nhân hơi lồi vào lòng khoang)." }
    ],
    decoder: "Biểu mô lát đơn gặp ở lá ngoài bao Bowman, đoạn lên quai Henlé. Ngoài ra khi có nguồn gốc trung mô: lợp màng bụng/màng phổi/màng tim gọi là TRUNG BIỂU MÔ; lót mặt trong mạch máu gọi là NỘI MÔ."
  },
  {
    id: "h_2_5",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.5",
    page: 20,
    kind: "micrograph",
    stain: "H&E (Ống thận / Ống tuyến)",
    title: "Biểu mô vuông đơn",
    img: "assets/histology/simple_cuboidal.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 50, y: 38, label: "1 lớp tế bào khối vuông", detail: "Chiều cao và chiều rộng gần bằng nhau, xếp thành 1 hàng đều đặn quanh lòng ống." },
      { x: 35, y: 46, label: "Nhân tròn nằm giữa tế bào", detail: "Dấu hiệu nhận diện nhanh biểu mô vuông đơn là hàng nhân hình cầu xếp thẳng tắp." },
      { x: 65, y: 55, label: "Lòng ống bài xuất / ống thận", detail: "Khoang trống ở giữa chứa dịch lọc hoặc chất tiết; tế bào thực hiện hấp thu – tái hấp thu mạnh." }
    ],
    decoder: "Thường thấy ở nhiều ống bài xuất của các tuyến và các ống thận (nơi giữ chức năng hấp thu – tái hấp thu rất mạnh để tạo nước tiểu)."
  },
  {
    id: "h_2_6",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.6",
    page: 21,
    kind: "hybrid",
    stain: "H&E & Trichrome (6 Panel)",
    title: "Biểu mô đơn và biểu mô tầng (4 biến đổi cực đỉnh BM trụ đơn + lớp tầng)",
    panels: [
      { img: "assets/histology/simple_columnar.jpg", label: "1 & 3. BM trụ đơn & Vi nhung mao (Mâm khía)", desc: "Tế bào cao hơn rộng, nhân bầu dục lệch đáy; cực đỉnh có đường viền khía dọc mảnh (ruột non – hấp thu dinh dưỡng)." },
      { img: "assets/histology/simple_columnar_goblet.jpg", label: "2. BM trụ đơn chứa giọt chất nhầy sáng", desc: "Cực đỉnh phình sáng chứa chất nhầy (như ở dạ dày bảo vệ niêm mạc khỏi HCl hoặc tế bào đài ở ruột)." },
      { svg: `<svg viewBox="0 0 240 165" class="fig-svg" style="background:#fdf2f8"><rect x="10" y="70" width="220" height="82" fill="#f5d0fe" stroke="#86198f"/><line x1="65" y1="70" x2="65" y2="152" stroke="#86198f"/><line x1="120" y1="70" x2="120" y2="152" stroke="#86198f"/><line x1="175" y1="70" x2="175" y2="152" stroke="#86198f"/><ellipse cx="38" cy="128" rx="7" ry="12" fill="#701a75"/><ellipse cx="92" cy="128" rx="7" ry="12" fill="#701a75"/><ellipse cx="147" cy="128" rx="7" ry="12" fill="#701a75"/><ellipse cx="202" cy="128" rx="7" ry="12" fill="#701a75"/><path d="M35 70 Q28 40 42 20 M38 70 Q50 45 45 24 M92 70 Q84 42 98 18 M147 70 Q138 38 156 22 M202 70 Q196 42 208 20" stroke="#701a75" stroke-width="2" fill="none"/><text x="120" y="14" text-anchor="middle" fill="#86198f" font-size="11" font-weight="800">4. Lông giả (Ống mào tinh)</text></svg>`, label: "4. BM trụ đơn có lông giả", desc: "Nhánh bào tương dài cong queo có thể phân nhánh; cấu tạo giống vi nhung mao (actin) nên KHÔNG chuyển động." },
      { img: "assets/histology/stratified_squamous_nonkerat.jpg", label: "5. BM lát tầng (Lớp đáy khối vuông + Lớp gai)", desc: "Lớp đáy là hàng tế bào khối vuông sinh sản tựa màng đáy; phía trên là lớp gai nhiều hàng tế bào đa diện." },
      { svg: `<svg viewBox="0 0 240 165" class="fig-svg" style="background:#eff6ff"><rect x="10" y="65" width="220" height="86" fill="#e9d5ff" stroke="#6b21a8"/><line x1="65" y1="65" x2="65" y2="151" stroke="#6b21a8"/><line x1="120" y1="65" x2="120" y2="151" stroke="#6b21a8"/><line x1="175" y1="65" x2="175" y2="151" stroke="#6b21a8"/><ellipse cx="38" cy="124" rx="7" ry="12" fill="#581c87"/><ellipse cx="92" cy="124" rx="7" ry="12" fill="#581c87"/><ellipse cx="147" cy="124" rx="7" ry="12" fill="#581c87"/><ellipse cx="202" cy="124" rx="7" ry="12" fill="#581c87"/><path d="M22 65 L26 32 M32 65 L36 30 M42 65 L46 32 M52 65 L56 30 M78 65 L82 32 M90 65 L94 30 M102 65 L106 32 M134 65 L138 32 M146 65 L150 30 M158 65 L162 32 M190 65 L194 32 M204 65 L208 30" stroke="#4c1d95" stroke-width="2.5"/><text x="120" y="18" text-anchor="middle" fill="#4c1d95" font-size="11" font-weight="800">6. Lông chuyển 9+2 (Vòi trứng)</text></svg>`, label: "6. BM trụ đơn có lông chuyển", desc: "Vạch dọc dày, dài, thưa hơn mâm khía; cấu tạo 9 cặp siêu ống ngoại vi + trục trung tâm → chuyển động được." }
    ],
    pins: [
      { label: "So sánh 4 biến đổi cực đỉnh", detail: "Giọt nhầy (dạ dày chống HCl) • Vi nhung mao/actin (mâm khía ruột, bờ bàn chải ống thận) • Lông giả/actin bất động (ống mào tinh) • Lông chuyển/9 cặp siêu ống (vòi trứng)." }
    ],
    decoder: "Hình 2.6 tổng hợp toàn bộ các biến đổi cực đỉnh của biểu mô trụ đơn và đối chiếu trực tiếp với biểu mô lát tầng (lớp đáy vuông + lớp gai)."
  },
  {
    id: "h_2_7",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.7",
    page: 22,
    kind: "hybrid",
    stain: "H&E (Khí quản)",
    title: "Biểu mô trụ giả tầng có lông chuyển (Mô hình 3D & Tiêu bản)",
    img: "assets/histology/pseudostratified.jpg",
    imgCaption: "Biểu mô trụ giả tầng có lông chuyển lót khí quản nằm trên sụn trong.",
    credit: "Berkshire Community College (CC0)",
    svg: `<svg viewBox="0 0 380 230" class="fig-svg" style="background:#fdf4ff">
      <!-- Basement membrane -->
      <rect x="14" y="190" width="352" height="10" fill="#0284c7" rx="3"/>
      <text x="190" y="218" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">1 MÀNG ĐÁY CHUNG (Tất cả tế bào đều tựa vào đây)</text>
      <!-- Tall ciliated cells -->
      <path d="M24 190 L24 58 L74 58 L64 190 Z" fill="#e9d5ff" stroke="#7e22ce" stroke-width="1.8"/>
      <ellipse cx="46" cy="115" rx="8" ry="14" fill="#6b21a8"/>
      <!-- Goblet cell -->
      <path d="M74 58 C65 110 86 135 84 190 L108 190 C106 135 128 110 118 58 Z" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
      <ellipse cx="96" cy="166" rx="6" ry="10" fill="#9d174d"/>
      <!-- Reserve basal cell (short, doesn't reach lumen) -->
      <path d="M110 190 Q124 130 144 190 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
      <circle cx="127" cy="172" r="7" fill="#831843"/>
      <!-- Tall ciliated cell 2 -->
      <path d="M118 58 L178 58 L168 190 L144 190 Q138 140 118 58 Z" fill="#ddd6fe" stroke="#7e22ce" stroke-width="1.8"/>
      <ellipse cx="152" cy="96" rx="8" ry="14" fill="#6b21a8"/>
      <!-- More cells -->
      <path d="M178 58 L235 58 L225 190 L168 190 Z" fill="#e9d5ff" stroke="#7e22ce" stroke-width="1.8"/>
      <ellipse cx="204" cy="130" rx="8" ry="14" fill="#6b21a8"/>
      <path d="M235 58 C228 115 246 140 242 190 L268 190 C264 140 284 115 276 58 Z" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
      <ellipse cx="255" cy="166" rx="6" ry="10" fill="#9d174d"/>
      <path d="M276 58 L350 58 L350 190 L268 190 Z" fill="#ddd6fe" stroke="#7e22ce" stroke-width="1.8"/>
      <ellipse cx="310" cy="108" rx="8" ry="14" fill="#6b21a8"/>
      <!-- Cilia at top -->
      <path d="M28 58 L28 38 M38 58 L38 36 M48 58 L48 38 M58 58 L58 36 M126 58 L126 38 M136 58 L136 36 M148 58 L148 38 M160 58 L160 36 M186 58 L186 38 M198 58 L198 36 M212 58 L212 38 M286 58 L286 38 M300 58 L300 36 M314 58 L314 38 M330 58 L330 36" stroke="#581c87" stroke-width="2.2"/>
      <text x="190" y="24" text-anchor="middle" fill="#581c87" font-size="11.5" font-weight="800" class="svg-auto-label">Lông chuyển trên cực đỉnh • Nhân nhiều độ cao</text>
    </svg>`,
    svgCaption: "Tất cả tế bào trụ, tế bào đài và tế bào dự trữ nhỏ đều tựa chung trên 1 màng đáy.",
    pins: [
      { x: 35, y: 45, label: "Lông chuyển trên cực đỉnh", detail: "Hệ thống lông chuyển chuyển động nhịp nhàng đẩy lớp nhầy chứa bụi ra khỏi đường hô hấp." },
      { x: 41, y: 26, label: "Tế bào đài tiết nhầy", detail: "Bào tương sáng hình đài hoa tiết chất nhầy giữ bụi." },
      { x: 46, y: 65, label: "Tế bào dự trữ & Màng đáy chung", detail: "Tế bào nhỏ nằm đáy không chạm tới lòng ống nhưng vẫn tựa lên màng đáy chung (nhân xếp nhiều tầng giả)." },
      { x: 70, y: 50, label: "Sụn trong khí quản bên dưới", detail: "Mô sụn trong nâng đỡ thành khí quản nằm dưới lớp mô đệm." }
    ],
    decoder: "Câu bẫy kinh điển (Câu 3 tr.32): Tuy nhìn nhân xếp chồng nhiều hàng nhưng thực chất đây là BIỂU MÔ ĐƠN TẦNG vì MỌI tế bào đều chạm xuống cùng 1 màng đáy!"
  },
  {
    id: "h_2_8",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.8",
    page: 23,
    kind: "micrograph",
    stain: "H&E (Da)",
    title: "Biểu mô lát tầng sừng hóa ở da (Đủ 5 lớp)",
    img: "assets/histology/epidermis_skin.jpg",
    credit: "Kilbad / Fama Clamosa (Public domain)",
    pins: [
      { x: 25, y: 60, label: "1. Lớp đáy (Lớp sinh sản)", detail: "1 hàng tế bào hình khối vuông tựa trên màng đáy nhấp nhô, phân bào mạnh tái tạo toàn bộ biểu bì." },
      { x: 52, y: 48, label: "2. Lớp gai", detail: "Nhiều hàng tế bào đa diện liên kết nhau chặt chẽ bằng vô số thể liên kết (desmosome) dạng gai." },
      { x: 45, y: 36, label: "3. Lớp hạt", detail: "Các tế bào dẹt dần, trong bào tương chứa nhiều hạt ưa baz đậm màu gọi là hạt keratohyalin." },
      { x: 65, y: 32, label: "4. Lớp bóng", detail: "Tế bào chết mảnh nằm sát lớp sừng, chứa hạt eleidin (kết hợp protein tơ trương lực + hạt keratohyalin)." },
      { x: 50, y: 20, label: "5. Lớp sừng", detail: "Nhiều hàng tế bào chết dẹt, MẤT NHÂN và hóa sừng hoàn toàn, giúp chống thấm và bốc hơi nước." }
    ],
    decoder: "CHỈ GẶP Ở DA! Phải nhớ chính xác thứ tự 5 lớp từ đáy lên ngọn (Đáy → Gai → Hạt → Bóng → Sừng) cùng 2 tên hạt đặc hiệu: keratohyalin (lớp hạt) và eleidin (lớp bóng)."
  },
  {
    id: "h_2_9",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.9",
    page: 24,
    kind: "micrograph",
    stain: "H&E (Miệng / Thực quản / Âm đạo)",
    title: "Biểu mô lát tầng không sừng hóa",
    img: "assets/histology/stratified_squamous_nonkerat.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 68, y: 62, label: "Lớp đáy (TB khối vuông)", detail: "Hàng tế bào khối vuông tựa màng đáy, sinh sản tái tạo các lớp bên trên." },
      { x: 52, y: 40, label: "Lớp trung gian (TB đa diện nhân lớn)", detail: "Nhiều hàng tế bào đa diện có nhân tròn/bầu dục lớn, không có hạt keratohyalin." },
      { x: 34, y: 18, label: "Lớp bề mặt (TB dẹt VẪN CÒN NHÂN)", detail: "Tế bào dẹt dần và bong tróc nhưng VẪN CÒN NHÂN rõ và không hóa sừng." },
      { x: 42, y: 78, label: "Mô đệm bên dưới", detail: "Mô liên kết giàu mạch máu nuôi dưỡng biểu mô thông qua màng đáy." }
    ],
    decoder: "Câu tự lượng giá 1 (tr.32): Khác với loại sừng hóa ở chỗ KHÔNG CÓ LỚP HẠT (và lớp bóng/sừng), tế bào bề mặt vẫn còn nhân! Gặp ở miệng, thực quản, âm đạo."
  },
  {
    id: "h_2_10",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.10",
    page: 24,
    kind: "svg",
    stain: "Sơ đồ vi thể đối chiếu",
    title: "Biểu mô vuông tầng – Biểu mô trụ tầng",
    svg: `<svg viewBox="0 0 560 220" class="fig-svg" style="background:#f8fafc">
      <!-- Vuông tầng -->
      <rect x="14" y="14" width="256" height="192" rx="12" fill="#fff" stroke="#cbd5e1"/>
      <text x="142" y="34" text-anchor="middle" fill="#6d28d9" font-size="12.5" font-weight="800">BIỂU MÔ VUÔNG TẦNG</text>
      <ellipse cx="142" cy="112" rx="88" ry="66" fill="#e9d5ff" stroke="#7c3aed" stroke-width="2"/>
      <ellipse cx="142" cy="112" rx="34" ry="26" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="142" y="116" text-anchor="middle" fill="#6d28d9" font-size="10.5" font-weight="700">Lòng ống hẹp</text>
      <!-- 2 layers of cuboidal cells -->
      <circle cx="94" cy="112" r="6" fill="#5b21b6"/><circle cx="72" cy="112" r="6" fill="#5b21b6"/>
      <circle cx="190" cy="112" r="6" fill="#5b21b6"/><circle cx="212" cy="112" r="6" fill="#5b21b6"/>
      <circle cx="142" cy="70" r="6" fill="#5b21b6"/><circle cx="142" cy="54" r="6" fill="#5b21b6"/>
      <circle cx="142" cy="154" r="6" fill="#5b21b6"/><circle cx="142" cy="170" r="6" fill="#5b21b6"/>
      <text x="142" y="196" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600" class="svg-auto-label">Ống bài xuất nước bọt, mồ hôi • Lớp đáy có nếp gấp đáy</text>

      <!-- Trụ tầng -->
      <rect x="290" y="14" width="256" height="192" rx="12" fill="#fff" stroke="#cbd5e1"/>
      <text x="418" y="34" text-anchor="middle" fill="#db2777" font-size="12.5" font-weight="800">BIỂU MÔ TRỤ TẦNG</text>
      <ellipse cx="418" cy="112" rx="94" ry="66" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
      <ellipse cx="418" cy="112" rx="38" ry="22" fill="#fff" stroke="#be185d" stroke-width="2"/>
      <text x="418" y="116" text-anchor="middle" fill="#be185d" font-size="10" font-weight="700">Ống lớn</text>
      <!-- Inner columnar + outer cuboidal -->
      <ellipse cx="418" cy="74" rx="5" ry="9" fill="#9d174d"/><circle cx="418" cy="54" r="5" fill="#831843"/>
      <ellipse cx="418" cy="150" rx="5" ry="9" fill="#9d174d"/><circle cx="418" cy="170" r="5" fill="#831843"/>
      <ellipse cx="364" cy="112" rx="9" ry="5" fill="#9d174d"/><circle cx="342" cy="112" r="5" fill="#831843"/>
      <ellipse cx="472" cy="112" rx="9" ry="5" fill="#9d174d"/><circle cx="494" cy="112" r="5" fill="#831843"/>
      <text x="418" y="196" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600" class="svg-auto-label">1–2 lớp vuông dưới + 1 lớp trụ bề mặt (ống lớn)</text>
    </svg>`,
    pins: [
      { x: 25, y: 50, label: "Biểu mô phủ vuông tầng", detail: "Nhiều lớp tế bào khối vuông giới hạn lòng ống hẹp; lớp đáy thường có nếp gấp đáy (mê đạo đáy) giúp tăng trao đổi chất (tuyến nước bọt, tuyến mồ hôi)." },
      { x: 75, y: 50, label: "Biểu mô phủ trụ tầng", detail: "Gồm 1–2 lớp tế bào khối vuông ở dưới và 1 lớp tế bào hình trụ ở bề mặt; gặp ở các ống bài xuất có đường kính lớn." }
    ],
    decoder: "Nhớ quy tắc lớp nông nhất: dù cả hai đều có lớp đáy là khối vuông, loại vuông tầng có lớp bề mặt vuông (ống bài xuất nhỏ/vừa như tuyến mồ hôi), còn loại trụ tầng có lớp bề mặt hình trụ cao (ống bài xuất đường kính lớn)."
  },
  {
    id: "h_2_11",
    chapter: 2,
    lessonId: 2,
    code: "Hình 2.11",
    page: 25,
    kind: "micrograph",
    stain: "H&E (Đường dẫn tiểu / Bàng quang)",
    title: "Biểu mô đa dạng tầng (Biểu mô niệu)",
    img: "assets/histology/urothelium.jpg",
    credit: "Berkshire Community College (CC0)",
    pins: [
      { x: 24, y: 50, label: "Lớp bề mặt (Tế bào hình dù rất lớn)", detail: "Tế bào cực lớn phồng vào lòng ống, cực đáy bị ấn lõm bởi các tế bào bên dưới; sẽ bị ÉP DẸT khi bàng quang căng đầy nước tiểu." },
      { x: 40, y: 45, label: "Lớp trung gian (Tế bào hình vợt)", detail: "1–2 lớp tế bào hình vợt có trục dọc vuông góc với bề mặt biểu mô." },
      { x: 64, y: 48, label: "Lớp đáy (Không liên tục đều đặn)", detail: "Tế bào khối vuông tựa màng đáy, lớp đáy không đều và không liên tục." },
      { x: 52, y: 55, label: "Trục mô liên kết đệm ở giữa", detail: "Nếp gấp niêm mạc bàng quang chứa mô liên kết giàu mạch máu nâng đỡ biểu mô niệu." }
    ],
    decoder: "CHỈ GẶP TRONG ĐƯỜNG DẪN TIỂU! Hai chi tiết nhận diện kinh điển trong sách Trần Công Toại: tế bào hình vợt ở lớp trung gian và tế bào bề mặt rất lớn có cực đáy bị ấn lõm (dẹt xuống khi căng đầy)."
  },
  {
    id: "h_2_12",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.12",
    page: 25,
    kind: "svg",
    stain: "Sơ đồ cấu tạo",
    title: "Tuyến ngoại tiết: Phần bài xuất & Phần chế tiết",
    svg: `<svg viewBox="0 0 460 240" class="fig-svg" style="background:#fff">
      <!-- Surface epithelium -->
      <rect x="20" y="28" width="160" height="22" fill="#e2e8f0" stroke="#475569"/>
      <rect x="280" y="28" width="160" height="22" fill="#e2e8f0" stroke="#475569"/>
      <!-- Excretory duct -->
      <rect x="180" y="28" width="24" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <rect x="256" y="28" width="24" height="90" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <!-- Secretory branched acini -->
      <path d="M180 118 L110 175 C95 190 120 212 140 198 L204 148 L220 205 C224 222 246 222 250 205 L260 155 L315 195 C332 206 352 184 334 168 L280 118" fill="#fbcfe8" stroke="#be185d" stroke-width="2.5"/>
      <!-- Secretion dots moving up -->
      <circle cx="230" cy="170" r="3.5" fill="#db2777"/><circle cx="230" cy="135" r="3.5" fill="#db2777"/>
      <circle cx="230" cy="95" r="3.5" fill="#db2777"/><circle cx="230" cy="60" r="3.5" fill="#db2777"/>
      <path d="M230 160 L230 18" stroke="#0284c7" stroke-width="3"/>
      <polygon points="222,22 238,22 230,8" fill="#0284c7"/>
      <!-- Labels -->
      <text x="85" y="92" fill="#0369a1" font-size="12" font-weight="800" class="svg-auto-label">Phần bài xuất (ống dẫn)</text>
      <text x="368" y="160" fill="#be185d" font-size="12" font-weight="800" class="svg-auto-label">Phần chế tiết</text>
      <text x="230" y="232" text-anchor="middle" fill="#9d174d" font-size="12" font-weight="800">TUYẾN NGOẠI TIẾT LÕM SÂU XUỐNG MÔ ĐỆM</text>
    </svg>`,
    pins: [
      { x: 25, y: 38, label: "Phần bài xuất (ống dẫn)", detail: "Gồm một hay nhiều ống dẫn đưa chất chế tiết lên bề mặt biểu mô phủ." },
      { x: 80, y: 67, label: "Phần chế tiết", detail: "Các tế bào tuyến biệt hóa có tính phân cực rõ: cực đáy chứa nhân và LNBH, cực đỉnh hướng vào lòng ống chứa sản phẩm tiết." }
    ],
    decoder: "Sơ đồ Hình 2.12 minh họa cấu trúc chung của tuyến ngoại tiết hình thành từ biểu mô phủ lõm sâu xuống mô đệm tạo phần bài xuất và phần chế tiết."
  },
  {
    id: "h_2_13",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.13",
    page: 26,
    kind: "hybrid",
    stain: "Nhuộm P.A.S (Đỏ) vs H&E",
    title: "Tuyến chế tiết nhầy (nhuộm P.A.S) – Tuyến chế tiết nước",
    img: "assets/histology/submandibular_mixed.jpg",
    imgCaption: "Tiêu bản đối chiếu nang tiết nhầy (bào tương sáng, nhân dẹt đáy) và tế bào tiết nước (hạt chế tiết, nhân tròn).",
    credit: "Heihaheihaha (CC BY-SA 4.0)",
    svg: `<svg viewBox="0 0 380 220" class="fig-svg" style="background:#fff">
      <!-- Mucous PAS+ -->
      <rect x="10" y="12" width="174" height="196" rx="10" fill="#fff1f2" stroke="#e11d48"/>
      <text x="97" y="32" text-anchor="middle" fill="#be123c" font-size="12" font-weight="800">TIẾT NHẦY (Nhuộm P.A.S)</text>
      <circle cx="97" cy="110" r="56" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
      <circle cx="97" cy="110" r="14" fill="#fff" stroke="#be123c"/>
      <!-- Flattened basal nuclei + bright red PAS mucin -->
      <ellipse cx="97" cy="62" rx="10" ry="3.5" fill="#4c0519"/>
      <ellipse cx="97" cy="158" rx="10" ry="3.5" fill="#4c0519"/>
      <ellipse cx="49" cy="110" rx="3.5" ry="10" fill="#4c0519"/>
      <ellipse cx="145" cy="110" rx="3.5" ry="10" fill="#4c0519"/>
      <text x="97" y="186" text-anchor="middle" fill="#881337" font-size="10.5" font-weight="700" class="svg-auto-label">Bắt màu ĐỎ P.A.S • Nhân dẹt sát đáy</text>

      <!-- Serous -->
      <rect x="196" y="12" width="174" height="196" rx="10" fill="#f5f3ff" stroke="#7c3aed"/>
      <text x="283" y="32" text-anchor="middle" fill="#5b21b6" font-size="12" font-weight="800">TIẾT NƯỚC (H&amp;E)</text>
      <circle cx="283" cy="110" r="56" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="283" cy="110" r="9" fill="#fff" stroke="#5b21b6"/>
      <!-- Round basal nuclei + apical zymogen granules -->
      <circle cx="283" cy="68" r="6" fill="#3b0764"/><circle cx="283" cy="152" r="6" fill="#3b0764"/>
      <circle cx="241" cy="110" r="6" fill="#3b0764"/><circle cx="325" cy="110" r="6" fill="#3b0764"/>
      <circle cx="283" cy="92" r="2.2" fill="#db2777"/><circle cx="277" cy="94" r="2.2" fill="#db2777"/><circle cx="289" cy="94" r="2.2" fill="#db2777"/>
      <circle cx="283" cy="128" r="2.2" fill="#db2777"/><circle cx="265" cy="110" r="2.2" fill="#db2777"/><circle cx="301" cy="110" r="2.2" fill="#db2777"/>
      <text x="283" y="186" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="700" class="svg-auto-label">Hạt chế tiết cực đỉnh • Nhân tròn cực đáy ái kiềm</text>
    </svg>`,
    pins: [
      { x: 52, y: 55, label: "Nang tiết nhầy (Sáng trên H&E, Đỏ trên P.A.S)", detail: "Cực đỉnh chứa nhiều giọt chất nhầy sáng giàu glucid (P.A.S dương tính đỏ), ép dẹt nhân về sát cực đáy." },
      { x: 22, y: 40, label: "Nang / tế bào tiết nước", detail: "Cực đỉnh chứa nhiều hạt chế tiết (zymogen), nhân tròn nằm trong bào tương ái kiềm ở cực đáy." }
    ],
    decoder: "Mẹo soi H&E phân biệt ngay tức thì: nang NHẦY sáng lợt + nhân dẹt sát đáy (nhuộm P.A.S bắt màu đỏ rực); nang NƯỚC sẫm tím hơn + hạt chế tiết cực đỉnh + nhân tròn lệch đáy."
  },
  {
    id: "h_2_14",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.14",
    page: 26,
    kind: "hybrid",
    stain: "H&E (Ruột & Dạ dày)",
    title: "Biểu mô trụ đơn với Tế bào đài biệt lập vs Lá tuyến",
    img: "assets/histology/simple_columnar_goblet.jpg",
    imgCaption: "Tế bào tuyến biệt lập (tế bào đài sáng) nằm rải rác trong biểu mô phủ trụ đơn.",
    credit: "Berkshire Community College (CC0)",
    svg: `<svg viewBox="0 0 380 210" class="fig-svg" style="background:#fff7ed">
      <text x="190" y="24" text-anchor="middle" fill="#9a3412" font-size="12.5" font-weight="800">LÁ TUYẾN (100% tế bào trụ đều tiết nhầy)</text>
      <rect x="20" y="160" width="340" height="22" fill="#fed7aa" stroke="#ea580c"/>
      <text x="190" y="175" text-anchor="middle" fill="#7c2d12" font-size="10.5" font-weight="700">Màng đáy &amp; Mô đệm</text>
      <!-- All columnar cells contain apical mucin droplet -->
      ${[0,1,2,3,4,5,6,7].map((i) => {
        const x = 24 + i * 42;
        return `<rect x="${x}" y="48" width="40" height="112" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
                <ellipse cx="${x+20}" cy="76" rx="14" ry="22" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
                <ellipse cx="${x+20}" cy="140" rx="8" ry="11" fill="#7c2d12"/>`;
      }).join("")}
      <text x="190" y="200" text-anchor="middle" fill="#9a3412" font-size="11" font-weight="700" class="svg-auto-label">Gặp ở Dạ dày và Cổ trong cổ tử cung</text>
    </svg>`,
    pins: [
      { x: 52, y: 42, label: "Tế bào đài (TB tuyến biệt lập)", detail: "Đỉnh phình to như đài hoa chứa đầy chất nhầy sáng, đáy hẹp chứa nhân đậm, xen kẽ tế bào trụ hấp thu." },
      { x: 35, y: 65, label: "Lá tuyến (Sơ đồ phải)", detail: "Toàn bộ tế bào của biểu mô phủ trụ đơn đều biệt hóa thành tế bào tiết nhầy (dạ dày, cổ trong cổ tử cung)." }
    ],
    decoder: "Phân biệt rõ: Tế bào đài là tuyến ĐƠN BÀO nằm rải rác (1.1), còn Lá tuyến là TẤT CẢ tế bào biểu mô phủ trụ đơn đều tiết nhầy (1.2)."
  },
  {
    id: "h_2_15",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.15",
    page: 26,
    kind: "svg",
    stain: "Sơ đồ vi thể",
    title: "Tế bào đài tiết nhầy trong biểu mô (Tuyến trong biểu mô)",
    svg: `<svg viewBox="0 0 460 220" class="fig-svg" style="background:#fffbeb">
      <rect x="20" y="165" width="420" height="32" fill="#dbeafe" stroke="#2563eb"/>
      <text x="230" y="185" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="700">Màng đáy &amp; Mô liên kết đệm (không bị lõm sâu vào)</text>
      <!-- Left pseudostratified ciliated -->
      <path d="M24 55 L145 55 L180 105 L280 105 L315 55 L436 55 L436 165 L24 165 Z" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
      <!-- Goblet cells concentrated in shallow depression -->
      <ellipse cx="195" cy="128" rx="14" ry="20" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <ellipse cx="230" cy="128" rx="14" ry="20" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <ellipse cx="265" cy="128" rx="14" ry="20" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <circle cx="195" cy="154" r="5" fill="#78350f"/><circle cx="230" cy="154" r="5" fill="#78350f"/><circle cx="265" cy="154" r="5" fill="#78350f"/>
      <!-- Cilia on sides -->
      <path d="M40 55 L40 38 M55 55 L55 38 M70 55 L70 38 M85 55 L85 38 M100 55 L100 38 M340 55 L340 38 M355 55 L355 38 M370 55 L370 38 M385 55 L385 38 M400 55 L400 38" stroke="#92400e" stroke-width="2"/>
      <text x="230" y="34" text-anchor="middle" fill="#b45309" font-size="12.5" font-weight="800">CHỖ LÕM NHẸ TRONG BM TRỤ GIẢ TẦNG</text>
      <text x="230" y="84" text-anchor="middle" fill="#dc2626" font-size="11.5" font-weight="800" class="svg-auto-label">Tập trung nhiều tế bào đài tiết nhầy</text>
    </svg>`,
    pins: [
      { x: 50, y: 58, label: "Cụm tế bào đài tập trung", detail: "Nhiều tế bào đài tiết nhầy tụ tập tại một chỗ lõm nhẹ ngay bên trong lớp biểu mô." },
      { x: 18, y: 36, label: "Biểu mô trụ giả tầng có lông chuyển bao quanh", detail: "Tuyến trong biểu mô CHỈ gặp trong biểu mô trụ giả tầng (đường hô hấp)." }
    ],
    decoder: "Chi tiết hay hỏi trắc nghiệm (tr. 25): Tuyến trong biểu mô CHỈ gặp trong biểu mô trụ giả tầng, là chỗ lõm nhẹ chứa nhiều tế bào đài và một ít tế bào trụ có lông chuyển."
  },
  {
    id: "h_2_16",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.16",
    page: 26,
    kind: "svg",
    stain: "Sơ đồ 7 dạng tuyến",
    title: "Sơ đồ các loại tuyến ống & tuyến túi (Đơn – Chia nhánh – Phức tạp)",
    svg: `<svg viewBox="0 0 560 265" class="fig-svg" style="background:#ffffff">
      <!-- Row 1: Simple -->
      <g transform="translate(20,16)">
        <path d="M40 10 L40 85 C40 95 54 95 54 85 L54 10" fill="#ede9fe" stroke="#5b21b6" stroke-width="2.5"/>
        <text x="47" y="112" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">1. Ống đơn thẳng</text>
      </g>
      <g transform="translate(150,16)">
        <path d="M45 10 L45 55 C45 75 68 70 60 88 C52 102 32 82 44 68 C58 55 72 80 54 96" fill="none" stroke="#5b21b6" stroke-width="6"/>
        <text x="52" y="112" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">2. Ống cong queo</text>
      </g>
      <g transform="translate(285,16)">
        <path d="M45 10 L45 36 L28 90 C28 96 38 96 38 90 L50 48 L62 90 C62 96 72 96 72 90 L55 36 L55 10" fill="#ede9fe" stroke="#5b21b6" stroke-width="2.2"/>
        <text x="50" y="112" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">3. Ống đơn chia nhánh</text>
      </g>
      <g transform="translate(425,16)">
        <path d="M45 10 L45 35 C20 35 16 62 32 70 C24 85 45 96 52 80 C62 96 82 84 72 68 C86 58 80 35 55 35 L55 10" fill="#fce7f3" stroke="#be185d" stroke-width="2.2"/>
        <text x="50" y="112" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">4. Túi đơn chia nhánh</text>
      </g>
      <!-- Row 2: Compound -->
      <g transform="translate(45,145)">
        <path d="M60 0 L60 28 L30 48 L15 78 M30 48 L42 82 M60 28 L90 48 L78 82 M90 48 L108 78" stroke="#6d28d9" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="15" cy="82" r="8" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
        <circle cx="42" cy="86" r="8" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
        <circle cx="78" cy="86" r="8" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
        <circle cx="108" cy="82" r="8" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
        <text x="60" y="108" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">5. Ống – túi phức tạp</text>
      </g>
      <g transform="translate(220,145)">
        <path d="M60 0 L60 30 L32 52 L22 86 M32 52 L44 88 M60 30 L88 52 L76 88 M88 52 L98 86" stroke="#0284c7" stroke-width="6" fill="none" stroke-linecap="round"/>
        <text x="60" y="108" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">6. Ống phức tạp</text>
      </g>
      <g transform="translate(390,145)">
        <path d="M60 0 L60 32 L30 50 M60 32 L90 50" stroke="#be185d" stroke-width="4" fill="none"/>
        <circle cx="24" cy="60" r="14" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
        <circle cx="42" cy="76" r="13" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
        <circle cx="96" cy="60" r="14" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
        <circle cx="78" cy="76" r="13" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
        <text x="60" y="108" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">7. Túi (nang) phức tạp</text>
      </g>
    </svg>`,
    pins: [
      { x: 12, y: 25, label: "Nhóm tuyến đơn (Ống dẫn không phân nhánh)", detail: "Gồm ống đơn thẳng (Lieberkühn), ống cong queo (mồ hôi), ống đơn chia nhánh (môn vị), túi đơn chia nhánh (tuyến bã)." },
      { x: 50, y: 78, label: "Nhóm tuyến phức tạp (Ống dẫn phân nhánh)", detail: "Ống bài xuất phân nhánh như cành cây dẫn từ nhiều đơn vị ống/túi chế tiết (Brunner, tuyến nước bọt, tụy)." }
    ],
    decoder: "Phân biệt 'Đơn' vs 'Phức tạp' nằm ở ỐNG BÀI XUẤT có phân nhánh hay không (tuyến đơn: ống bài xuất không phân nhánh; tuyến phức tạp: ống bài xuất phân nhánh kiểu cành cây)."
  },
  {
    id: "h_2_17",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.17",
    page: 27,
    kind: "hybrid",
    stain: "H&E (Ruột già & Dạ dày)",
    title: "Các loại ống tuyến: Tuyến Lieberkühn (ống thẳng đơn) & Tuyến môn vị (chia nhánh)",
    img: "assets/histology/colon_crypts.jpg",
    imgCaption: "Tuyến Lieberkühn ở ruột: các ống thẳng song song giàu tế bào đài sáng & tế bào trụ mâm khía.",
    credit: "Nephron (CC BY-SA 3.0)",
    svg: `<svg viewBox="0 0 380 220" class="fig-svg" style="background:#fff">
      <text x="190" y="22" text-anchor="middle" fill="#6d28d9" font-size="12" font-weight="800">SO SÁNH: TUYẾN LIEBERKÜHN vs TUYẾN MÔN VỊ</text>
      <!-- Left: Lieberkuhn 3 parts -->
      <rect x="24" y="42" width="140" height="160" rx="8" fill="#f5f3ff" stroke="#7c3aed"/>
      <path d="M62 50 L62 175 C62 188 92 188 92 175 L92 50" fill="#fff" stroke="#6d28d9" stroke-width="2.5"/>
      <text x="122" y="68" fill="#6d28d9" font-size="10.5" font-weight="700">1. Cổ tuyến</text>
      <text x="122" y="118" fill="#6d28d9" font-size="10.5" font-weight="700">2. Thân tuyến</text>
      <text x="122" y="176" fill="#6d28d9" font-size="10.5" font-weight="700">3. Đáy tuyến</text>
      <text x="94" y="196" text-anchor="middle" fill="#4c1d95" font-size="10" font-weight="800">Ống thẳng đơn (Lieberkühn)</text>

      <!-- Right: Pyloric branched -->
      <rect x="194" y="42" width="164" height="160" rx="8" fill="#fdf2f8" stroke="#db2777"/>
      <path d="M276 50 L276 82 L240 165 C240 176 260 176 260 165 L276 105 L292 165 C292 176 312 176 312 165 L284 82 L284 50" fill="#fff" stroke="#be185d" stroke-width="2.5"/>
      <text x="276" y="72" text-anchor="middle" fill="#be185d" font-size="10.5" font-weight="800">1 cổ tuyến chung</text>
      <text x="276" y="196" text-anchor="middle" fill="#9d174d" font-size="10" font-weight="800">Ống chia nhánh (Môn vị)</text>
    </svg>`,
    pins: [
      { x: 52, y: 20, label: "Cổ tuyến Lieberkühn", detail: "Phần nối tuyến với bề mặt biểu mô phủ niêm mạc ruột." },
      { x: 54, y: 50, label: "Thân tuyến (TB đài & TB mâm khía)", detail: "Chứa nhiều tế bào đài tiết nhầy sáng xen kẽ tế bào trụ hấp thu." },
      { x: 55, y: 82, label: "Đáy tuyến (Túi bịt dưới cùng)", detail: "Phần đáy bịt kín của ống thẳng nằm sát cơ niêm." }
    ],
    decoder: "Tuyến Lieberkühn (ruột) là điển hình tuyến ỐNG ĐƠN THẲNG (gồm cổ, thân, đáy tuyến); Tuyến môn vị (dạ dày) là điển hình tuyến ỐNG CHIA NHÁNH (nhiều ống ngắn đổ vào 1 cổ chung)."
  },
  {
    id: "h_2_18",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.18",
    page: 27,
    kind: "micrograph",
    stain: "H&E (Tá tràng)",
    title: "Ống tuyến phức tạp (Tuyến Brunner tá tràng)",
    img: "assets/histology/brunner_duodenum.jpg",
    credit: "Jpogi (Public domain)",
    pins: [
      { x: 58, y: 34, label: "Tuyến Lieberkühn tầng niêm mạc", detail: "Các ống tuyến thẳng ở niêm mạc ruột; đầu trên tuyến Brunner đổ vào lòng tuyến Lieberkühn." },
      { x: 52, y: 65, label: "Tuyến Brunner phân nhánh nhiều lần", detail: "Cụm ống tuyến tiết nhầy sáng màu nằm ở tầng dưới niêm mạc tá tràng, phân nhánh phức tạp nhiều lần." },
      { x: 25, y: 58, label: "Lớp cơ niêm & cơ trơn thành ruột", detail: "Ngăn cách tầng niêm mạc phía trên với tuyến Brunner dưới niêm mạc." }
    ],
    decoder: "Tuyến Brunner ở tá tràng là ví dụ chuẩn giáo trình cho TUYẾN ỐNG PHỨC TẠP: đầu trên thông với lòng tuyến Lieberkühn, đầu dưới phân nhánh nhiều lần thành phần chế tiết nhầy."
  },
  {
    id: "h_2_19",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.19",
    page: 28,
    kind: "svg",
    stain: "Sơ đồ & Đối chiếu vi thể",
    title: "Tuyến mồ hôi – Tuyến ống cong queo",
    svg: `<svg viewBox="0 0 560 245" class="fig-svg" style="background:#fff">
      <!-- Left schematic -->
      <rect x="12" y="12" width="250" height="220" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="137" y="32" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="800">SƠ ĐỒ GIẢI PHẪU DA</text>
      <path d="M24 54 L250 54" stroke="#9d174d" stroke-width="5"/>
      <!-- Hair follicle & sebaceous gland -->
      <path d="M88 32 L76 155 C74 172 90 174 92 158 L102 54" fill="#64748b" stroke="#334155"/>
      <ellipse cx="114" cy="96" rx="18" ry="12" fill="#fde047" stroke="#ca8a04"/>
      <text x="148" y="96" fill="#854d0e" font-size="10.5" font-weight="700" class="svg-auto-label">Tuyến bã</text>
      <text x="48" y="132" fill="#334155" font-size="10.5" font-weight="700" class="svg-auto-label">Nang lông</text>
      <!-- Sweat gland straight duct + coiled secretory -->
      <path d="M190 54 L190 142 C175 154 214 162 184 176 C165 186 218 194 188 208 C176 214 205 220 212 204" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      <text x="195" y="120" fill="#0369a1" font-size="10.5" font-weight="700" class="svg-auto-label">Phần bài xuất thẳng</text>
      <text x="140" y="216" fill="#0369a1" font-size="10.5" font-weight="700" class="svg-auto-label">Phần chế tiết cong queo</text>

      <!-- Right histologic cross section comparison -->
      <rect x="278" y="12" width="270" height="220" rx="10" fill="#fdf2f8" stroke="#db2777"/>
      <text x="413" y="32" text-anchor="middle" fill="#9d174d" font-size="12" font-weight="800">PHÂN BIỆT TRÊN LÁT CẮT VI THỂ</text>
      <!-- Secretory (1 layer pale cuboidal) -->
      <circle cx="355" cy="115" r="50" fill="#fff1f2" stroke="#e11d48" stroke-width="2.5"/>
      <circle cx="355" cy="115" r="22" fill="#fff" stroke="#e11d48" stroke-width="1.5"/>
      ${[0,45,90,135,180,225,270,315].map((a) => {
        const rad = a * Math.PI / 180;
        return `<circle cx="${355 + Math.cos(rad)*36}" cy="${115 + Math.sin(rad)*36}" r="5" fill="#9f1239"/>`;
      }).join("")}
      <text x="355" y="186" text-anchor="middle" fill="#9f1239" font-size="10.5" font-weight="800" class="svg-auto-label">Phần chế tiết</text>
      <text x="355" y="202" text-anchor="middle" fill="#475569" font-size="9.8" class="svg-auto-label">1 lớp TB vuông, bào tương SÁNG</text>
      <!-- Excretory (2 layers dark cuboidal) -->
      <circle cx="482" cy="115" r="42" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/>
      <circle cx="482" cy="115" r="14" fill="#fff" stroke="#5b21b6" stroke-width="1.5"/>
      ${[0,60,120,180,240,300].map((a) => {
        const rad = a * Math.PI / 180;
        return `<circle cx="${482 + Math.cos(rad)*22}" cy="${115 + Math.sin(rad)*22}" r="4" fill="#3b0764"/><circle cx="${482 + Math.cos(rad)*34}" cy="${115 + Math.sin(rad)*34}" r="4" fill="#3b0764"/>`;
      }).join("")}
      <text x="482" y="186" text-anchor="middle" fill="#5b21b6" font-size="10.5" font-weight="800" class="svg-auto-label">Phần bài xuất</text>
      <text x="482" y="202" text-anchor="middle" fill="#475569" font-size="9.8" class="svg-auto-label">BM vuông KÉP, sẫm màu hơn</text>
    </svg>`,
    pins: [
      { x: 35, y: 48, label: "Phần bài xuất thẳng (BM vuông kép)", detail: "Ống dẫn thẳng nối lên bề mặt da, thành ống là biểu mô vuông kép (2 tầng) bắt màu sẫm hơn." },
      { x: 64, y: 48, label: "Phần chế tiết cuộn xoắn (1 lớp TB vuông sáng)", detail: "Ống dài uốn lượn cắt qua nhiều góc độ, thành tạo bởi 1 lớp tế bào vuông có nhân tròn và bào tương sáng." }
    ],
    decoder: "Mẹo soi tiêu bản da phân biệt 2 cụm ống tuyến mồ hôi cạnh nhau: ống nào rộng + thành 1 lớp tế bào bào tương SÁNG = Phần chế tiết; ống nào nhỏ hơn + thành 2 lớp tế bào SẪM TÍM (BM vuông kép) = Phần bài xuất."
  },
  {
    id: "h_2_20",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.20",
    page: 28,
    kind: "svg",
    stain: "Sơ đồ cấu trúc",
    title: "Sơ đồ tuyến túi đơn – tuyến túi phức tạp",
    svg: `<svg viewBox="0 0 520 215" class="fig-svg" style="background:#fff">
      <!-- Simple acinar -->
      <rect x="14" y="14" width="235" height="186" rx="12" fill="#fdf2f8" stroke="#db2777"/>
      <text x="131" y="34" text-anchor="middle" fill="#9d174d" font-size="12" font-weight="800">TUYẾN TÚI ĐƠN</text>
      <path d="M122 48 L122 86 C85 88 72 135 102 152 C92 175 128 184 134 162 C142 184 176 174 164 150 C192 132 176 86 140 86 L140 48" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
      <text x="131" y="192" text-anchor="middle" fill="#831843" font-size="10.5" font-weight="700" class="svg-auto-label">1 ống bài xuất KHÔNG phân nhánh</text>

      <!-- Compound acinar -->
      <rect x="270" y="14" width="235" height="186" rx="12" fill="#f5f3ff" stroke="#7c3aed"/>
      <text x="387" y="34" text-anchor="middle" fill="#5b21b6" font-size="12" font-weight="800">TUYẾN TÚI PHỨC TẠP</text>
      <path d="M387 48 L387 82 M387 82 L338 112 L318 142 M338 112 L352 146 M387 82 L436 112 L422 146 M436 112 L456 142" stroke="#6d28d9" stroke-width="4" fill="none"/>
      <circle cx="314" cy="148" r="14" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="354" cy="152" r="14" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="420" cy="152" r="14" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <circle cx="460" cy="148" r="14" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
      <text x="387" y="192" text-anchor="middle" fill="#4c1d95" font-size="10.5" font-weight="700" class="svg-auto-label">Ống bài xuất phân nhánh kiểu cành cây</text>
    </svg>`,
    pins: [
      { x: 25, y: 45, label: "Tuyến túi đơn", detail: "Ống bài xuất không phân nhánh, nối với một hay nhiều nang phình dạng túi." },
      { x: 75, y: 45, label: "Tuyến túi phức tạp", detail: "Ống bài xuất phân nhánh như cành cây, đầu mỗi nhánh tận cùng bằng một hoặc nhiều nang chế tiết (tuyến nước bọt, tụy)." }
    ],
    decoder: "Nhớ: Tuyến túi có phần bài xuất dạng ống, còn phần chế tiết phình tròn thành các nang tuyến (nang nước, nang nhầy, nang pha)."
  },
  {
    id: "h_2_21",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.21",
    page: 29,
    kind: "hybrid",
    stain: "H&E (Tuyến nước bọt dưới hàm)",
    title: "Ba loại nang chế tiết: Nang nước – Nang nhầy – Nang pha (Liềm Gianuzzi)",
    img: "assets/histology/submandibular_mixed.jpg",
    imgCaption: "Tuyến nước bọt pha: nang nhầy sáng ở giữa có liềm Gianuzzi tiết nước màu hồng tím ôm ngoài.",
    credit: "Heihaheihaha (CC BY-SA 4.0)",
    svg: `<svg viewBox="0 0 390 220" class="fig-svg" style="background:#fff">
      <!-- 1. Nang nước -->
      <circle cx="66" cy="105" r="48" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
      <circle cx="66" cy="105" r="8" fill="#fff" stroke="#6b21a8"/>
      <circle cx="66" cy="70" r="5" fill="#3b0764"/><circle cx="66" cy="140" r="5" fill="#3b0764"/>
      <circle cx="31" cy="105" r="5" fill="#3b0764"/><circle cx="101" cy="105" r="5" fill="#3b0764"/>
      <circle cx="66" cy="90" r="2" fill="#db2777"/><circle cx="66" cy="120" r="2" fill="#db2777"/>
      <text x="66" y="176" text-anchor="middle" fill="#581c87" font-size="11" font-weight="800">1. Nang nước</text>
      <text x="66" y="192" text-anchor="middle" fill="#475569" font-size="9.5" class="svg-auto-label">Nhân tròn, nhiều hạt</text>

      <!-- 2. Nang nhầy -->
      <circle cx="195" cy="105" r="48" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
      <circle cx="195" cy="105" r="12" fill="#e0f2fe" stroke="#0284c7"/>
      <ellipse cx="195" cy="63" rx="9" ry="3" fill="#0c4a6e"/>
      <ellipse cx="195" cy="147" rx="9" ry="3" fill="#0c4a6e"/>
      <ellipse cx="153" cy="105" rx="3" ry="9" fill="#0c4a6e"/>
      <ellipse cx="237" cy="105" rx="3" ry="9" fill="#0c4a6e"/>
      <text x="195" y="176" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">2. Nang nhầy</text>
      <text x="195" y="192" text-anchor="middle" fill="#475569" font-size="9.5" class="svg-auto-label">Giọt nhầy sáng, nhân dẹt</text>

      <!-- 3. Nang pha + Gianuzzi -->
      <circle cx="322" cy="105" r="46" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
      <path d="M276 80 C295 45 352 45 368 86 C348 70 302 70 276 80 Z" fill="#f472b6" stroke="#be185d" stroke-width="2"/>
      <circle cx="305" cy="65" r="4" fill="#831843"/><circle cx="325" cy="60" r="4" fill="#831843"/><circle cx="344" cy="66" r="4" fill="#831843"/>
      <ellipse cx="322" cy="143" rx="9" ry="3" fill="#0c4a6e"/>
      <text x="322" y="176" text-anchor="middle" fill="#be185d" font-size="11" font-weight="800">3. Nang pha</text>
      <text x="322" y="192" text-anchor="middle" fill="#be185d" font-size="9.5" class="svg-auto-label">Có Liềm Gianuzzi ôm ngoài</text>
    </svg>`,
    pins: [
      { x: 45, y: 63, label: "Phần tiết nhầy ở giữa nang pha", detail: "Thành phần chủ yếu của nang pha: tế bào tháp bào tương sáng chứa đầy giọt nhầy, nhân dẹt sát đáy." },
      { x: 18, y: 65, label: "Liềm Gianuzzi (Tế bào tiết nước)", detail: "Các tế bào tiết nước liên kết thành liềm hình bán nguyệt sẫm màu hơn ôm bên ngoài nang nhầy." }
    ],
    decoder: "Liềm Gianuzzi là câu tủ trong mọi đề thi Mô học: trong nang pha của tuyến nước bọt, phần lõi chủ yếu là TB tiết nhầy, còn TB tiết nước tạo thành liềm hình bán nguyệt ôm ngoài."
  },
  {
    id: "h_2_22",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.22",
    page: 29,
    kind: "svg",
    stain: "Sơ đồ nguyên lý",
    title: "Sơ đồ các loại chế tiết (Ngoại tiết vs Nội tiết)",
    svg: `<svg viewBox="0 0 540 220" class="fig-svg" style="background:#f8fafc">
      <!-- Exocrine block -->
      <rect x="14" y="16" width="350" height="188" rx="12" fill="#fff" stroke="#0284c7" stroke-width="2"/>
      <text x="189" y="38" text-anchor="middle" fill="#0369a1" font-size="13" font-weight="800">NGOẠI TIẾT → Bề mặt cơ thể / Khoang</text>
      <!-- Merocrine -->
      <rect x="34" y="102" width="76" height="72" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <circle cx="72" cy="144" r="12" fill="#1e3a8a"/>
      <circle cx="62" cy="84" r="3.5" fill="#0284c7"/><circle cx="75" cy="76" r="3.5" fill="#0284c7"/><circle cx="84" cy="90" r="3.5" fill="#0284c7"/>
      <text x="72" y="192" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">Toàn vẹn</text>
      <!-- Apocrine -->
      <path d="M150 174 L150 105 Q170 116 188 102 Q208 118 226 105 L226 174 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <circle cx="188" cy="144" r="12" fill="#1e3a8a"/>
      <path d="M158 92 Q188 70 218 92 Z" fill="#7dd3fc" stroke="#0284c7" stroke-dasharray="3,2"/>
      <text x="188" y="192" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">Bán hủy</text>
      <!-- Holocrine -->
      <path d="M270 165 Q258 135 278 112 Q302 95 330 114 Q346 144 328 168 Q298 180 270 165 Z" fill="#7dd3fc" stroke="#be123c" stroke-width="2" stroke-dasharray="5,3"/>
      <circle cx="300" cy="138" r="9" fill="#9f1239" opacity="0.6"/>
      <text x="302" y="192" text-anchor="middle" fill="#be123c" font-size="11" font-weight="800">Toàn hủy</text>

      <!-- Endocrine block -->
      <rect x="382" y="16" width="144" height="188" rx="12" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
      <text x="454" y="38" text-anchor="middle" fill="#9f1239" font-size="13" font-weight="800">NỘI TIẾT</text>
      <rect x="416" y="64" width="76" height="72" rx="6" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
      <circle cx="454" cy="100" r="12" fill="#881337"/>
      <circle cx="445" cy="150" r="3" fill="#be123c"/><circle cx="456" cy="156" r="3" fill="#be123c"/><circle cx="465" cy="148" r="3" fill="#be123c"/>
      <rect x="404" y="166" width="100" height="24" rx="12" fill="#e11d48"/>
      <text x="454" y="182" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="800">Mạch máu</text>
    </svg>`,
    pins: [
      { x: 14, y: 60, label: "Toàn vẹn (Merocrine)", detail: "Xuất bào nhẹ nhàng, không mất bào tương, tế bào giữ nguyên vẹn (tuyến tụy)." },
      { x: 35, y: 60, label: "Bán hủy (Apocrine)", detail: "Đứt và thải ra một phần bào tương ở cực đỉnh cùng chất tiết (tuyến vú, mồ hôi nách)." },
      { x: 56, y: 60, label: "Toàn hủy (Holocrine)", detail: "Toàn bộ tế bào biến thành chất tiết và vỡ thải ra ngoài (tuyến bã)." },
      { x: 84, y: 60, label: "Nội tiết", detail: "Hormon đi qua cực đáy vào thẳng mạch máu mà không qua ống bài xuất." }
    ],
    decoder: "Sơ đồ trực quan hóa hướng bài xuất: 3 kiểu ngoại tiết đẩy sản phẩm lên cực đỉnh ra bề mặt/khoang; nội tiết đẩy sản phẩm xuống cực mạch máu."
  },
  {
    id: "h_2_23",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.23",
    page: 30,
    kind: "svg",
    stain: "Sơ đồ nang tuyến",
    title: "Sơ đồ 3 kiểu chế tiết ở cấp độ nang tuyến",
    svg: `<svg viewBox="0 0 560 215" class="fig-svg" style="background:#fff">
      <!-- 1. Toàn vẹn -->
      <g transform="translate(14,14)">
        <rect x="0" y="0" width="168" height="186" rx="10" fill="#fefce8" stroke="#ca8a04"/>
        <text x="84" y="22" text-anchor="middle" fill="#854d0e" font-size="12" font-weight="800">1. TOÀN VẸN</text>
        <path d="M58 40 C30 85 32 145 84 152 C136 145 138 85 110 40" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
        <circle cx="84" cy="110" r="18" fill="#fff"/>
        <circle cx="84" cy="60" r="3" fill="#854d0e"/><circle cx="80" cy="80" r="3" fill="#854d0e"/><circle cx="88" cy="95" r="3" fill="#854d0e"/>
        <text x="84" y="174" text-anchor="middle" fill="#713f12" font-size="10.2" font-weight="700" class="svg-auto-label">Tế bào nguyên vẹn (Tụy)</text>
      </g>
      <!-- 2. Bán hủy -->
      <g transform="translate(196,14)">
        <rect x="0" y="0" width="168" height="186" rx="10" fill="#fdf2f8" stroke="#db2777"/>
        <text x="84" y="22" text-anchor="middle" fill="#9d174d" font-size="12" font-weight="800">2. BÁN HỦY</text>
        <path d="M58 40 C30 85 32 145 84 152 C136 145 138 85 110 40" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
        <ellipse cx="84" cy="108" rx="14" ry="26" fill="#fff"/>
        <ellipse cx="84" cy="82" rx="9" ry="7" fill="#f472b6" stroke="#be185d"/>
        <text x="84" y="174" text-anchor="middle" fill="#831843" font-size="10.2" font-weight="700" class="svg-auto-label">Đứt bào tương đỉnh (Vú, nách)</text>
      </g>
      <!-- 3. Toàn hủy -->
      <g transform="translate(378,14)">
        <rect x="0" y="0" width="168" height="186" rx="10" fill="#ecfdf5" stroke="#16a34a"/>
        <text x="84" y="22" text-anchor="middle" fill="#166534" font-size="12" font-weight="800">3. TOÀN HỦY</text>
        <path d="M58 40 C30 85 32 145 84 152 C136 145 138 85 110 40" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
        <circle cx="72" cy="115" r="10" fill="#4ade80" stroke="#14532d" stroke-dasharray="3,2"/>
        <circle cx="96" cy="98" r="9" fill="#4ade80" stroke="#14532d" stroke-dasharray="3,2"/>
        <circle cx="84" cy="64" r="6" fill="#15803d" opacity="0.6"/>
        <ellipse cx="64" cy="140" rx="8" ry="5" fill="#166534"/>
        <text x="84" y="174" text-anchor="middle" fill="#14532d" font-size="10.2" font-weight="700" class="svg-auto-label">Vỡ cả TB + Gián phân đáy (Bã)</text>
      </g>
    </svg>`,
    pins: [
      { x: 18, y: 50, label: "Kiểu toàn vẹn (Tuyến tụy)", detail: "Sản phẩm tiết từ từ qua xuất bào; cấu trúc tế bào hoàn toàn không thay đổi." },
      { x: 50, y: 50, label: "Kiểu bán hủy (Tuyến vú, mồ hôi nách)", detail: "Chất tiết tích ở cực đỉnh và đứt rời từng khối kèm theo một phần bào tương cực đỉnh." },
      { x: 82, y: 50, label: "Kiểu toàn hủy (Tuyến bã)", detail: "Toàn bộ tế bào biến thành chất tiết và bị thải ra ngoài; tế bào lớp đáy phải gián phân liên tục để thay thế." }
    ],
    decoder: "Đặc trưng của nang toàn hủy (tuyến bã) trong Hình 2.23 là có các tế bào đáy đang GIÁN PHÂN để bù lại lớp tế bào đã bị tiêu hủy thành chất nhờn."
  },
  {
    id: "h_2_24",
    chapter: 2,
    lessonId: 3,
    code: "Hình 2.24",
    page: 30,
    kind: "hybrid",
    stain: "Phôi thai học & H&E (Vỏ thượng thận)",
    title: "Tuyến nội tiết: Quá trình hình thành & Cấu trúc vi thể",
    img: "assets/histology/adrenal_he.jpg",
    imgCaption: "Mô tuyến nội tiết (vùng vỏ thượng thận): dây tế bào tiếp xúc mao mạch, bào tương nhiều không bào lipid.",
    credit: "Nephron (CC BY-SA 3.0)",
    svg: `<svg viewBox="0 0 380 220" class="fig-svg" style="background:#fff">
      <text x="190" y="20" text-anchor="middle" fill="#9f1239" font-size="11.5" font-weight="800">QUÁ TRÌNH PHÁT TRIỂN TUYẾN NỘI TIẾT TRONG PHÔI</text>
      <!-- Step 1 -->
      <rect x="22" y="34" width="90" height="16" fill="#fbcfe8" stroke="#be185d"/>
      <text x="67" y="68" text-anchor="middle" fill="#475569" font-size="10">1. Lõm biểu mô</text>
      <!-- Step 2 -->
      <path d="M138 34 L172 34 L176 76 L190 76 L194 34 L228 34" fill="none" stroke="#be185d" stroke-width="5"/>
      <text x="183" y="94" text-anchor="middle" fill="#475569" font-size="10">2. Ăn sâu xuống đệm</text>
      <!-- Step 3: loses duct + capillaries invade -->
      <rect x="260" y="34" width="96" height="12" fill="#fbcfe8" stroke="#be185d"/>
      <circle cx="308" cy="54" r="3" fill="#be185d"/><circle cx="308" cy="65" r="3" fill="#be185d"/>
      <circle cx="308" cy="128" r="36" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
      <path d="M266 115 Q308 100 350 115 M266 142 Q308 158 350 142" stroke="#dc2626" stroke-width="3" fill="none"/>
      <text x="308" y="185" text-anchor="middle" fill="#9f1239" font-size="10.5" font-weight="800">3. Đứt ống nối + Mao mạch len vào</text>
    </svg>`,
    pins: [
      { x: 45, y: 50, label: "Dây/lá tế bào nội tiết không phân cực", detail: "Nhân nằm giữa tế bào; tế bào tiết hormon lipid có nhiều không bào nhỏ đồng đều, tiết protein có bào tương dạng hạt." },
      { x: 65, y: 35, label: "Mao mạch ôm sát lá tế bào", detail: "Không có ống bài xuất nên sản phẩm hormon đi thẳng vào hệ mao mạch phong phú." }
    ],
    decoder: "Trình tự phôi thai: (1) Biểu mô phủ lõm xuống mô đệm → (2) Cuống nối với bề mặt bị thoái hóa biến mất → (3) Các mao mạch mô đệm len lỏi ôm chặt khối tế bào tạo cơ quan nội tiết."
  },
  {
    id: "h_2_25",
    chapter: 2,
    lessonId: 1,
    code: "Hình 2.25",
    page: 31,
    kind: "svg",
    stain: "Sơ đồ 3D mặt bên tế bào",
    title: "Sơ đồ 6 loại liên kết giữa các tế bào biểu mô",
    svg: `<svg viewBox="0 0 460 280" class="fig-svg" style="background:#f8fafc">
      <!-- Two lateral cell membranes -->
      <rect x="70" y="20" width="120" height="240" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
      <rect x="270" y="20" width="120" height="240" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/>
      <!-- 1. Tight junction at apex -->
      <path d="M190 36 L270 36 M190 44 L270 44 M190 52 L270 52" stroke="#0f766e" stroke-width="4" stroke-dasharray="8,4"/>
      <text x="230" y="28" text-anchor="middle" fill="#0f766e" font-size="11" font-weight="800">1. Liên kết vòng bịt (Tight junction)</text>
      <!-- 2. Belt desmosome -->
      <rect x="184" y="68" width="92" height="12" fill="#0284c7" opacity="0.75"/>
      <text x="86" y="78" fill="#0369a1" font-size="10.5" font-weight="800" class="svg-auto-label">2. Thể LK vòng</text>
      <!-- 3. Desmosome (200-500 nm + keratin) -->
      <rect x="174" y="102" width="16" height="28" rx="3" fill="#9f1239"/>
      <rect x="270" y="102" width="16" height="28" rx="3" fill="#9f1239"/>
      <path d="M190 108 L270 108 M190 116 L270 116 M190 124 L270 124" stroke="#e11d48" stroke-width="2"/>
      <path d="M125 96 L174 112 M125 130 L174 120 M286 112 L338 98 M286 122 L338 134" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="108" y="116" text-anchor="middle" fill="#9f1239" font-size="10.5" font-weight="800" class="svg-auto-label">3. Desmosome</text>
      <!-- 4. Interdigitation / Khớp mộng -->
      <path d="M190 148 L240 148 C255 148 255 178 240 178 L190 178" fill="#ede9fe" stroke="#6d28d9" stroke-width="2.5"/>
      <text x="330" y="166" text-anchor="middle" fill="#5b21b6" font-size="10.5" font-weight="800" class="svg-auto-label">4. Khớp mộng</text>
      <!-- 5. Gap junction (Connexon 2-3 nm) -->
      <rect x="190" y="198" width="80" height="36" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <circle cx="215" cy="216" r="6" fill="#b45309"/><circle cx="230" cy="216" r="6" fill="#b45309"/><circle cx="245" cy="216" r="6" fill="#b45309"/>
      <line x1="215" y1="210" x2="215" y2="222" stroke="#fff" stroke-width="2"/>
      <line x1="230" y1="210" x2="230" y2="222" stroke="#fff" stroke-width="2"/>
      <text x="230" y="252" text-anchor="middle" fill="#b45309" font-size="11" font-weight="800">5. Liên kết khe (Gap junction • Connexon)</text>
    </svg>`,
    pins: [
      { x: 50, y: 16, label: "Liên kết vòng bịt (Tight junction)", detail: "Ở sát cực ngọn, may kín hai màng không cho đại phân tử và ion lọt qua khe gian bào." },
      { x: 50, y: 26, label: "Thể liên kết vòng (Belt desmosome)", detail: "Tạo dải vòng quanh cực ngọn tế bào biểu mô." },
      { x: 50, y: 41, label: "Thể liên kết (Desmosome 200–500 nm)", detail: "Hình bầu dục, gắn siêu sợi keratin (tơ trương lực) xuyên qua màng đan chéo chống lực xé." },
      { x: 52, y: 58, label: "Khớp mộng (Liên kết thể mộng)", detail: "Phần lồi lõm hai màng khớp vào nhau tăng độ bám cơ học." },
      { x: 50, y: 78, label: "Liên kết khe (Gap junction 1000 nm)", detail: "Hai màng cách nhau 2–3 nm, phức hợp protein connexon chuyển ion có TLPT ≤ 2·10³ (gặp ở mọi mô)." }
    ],
    decoder: "Sơ đồ 3D kinh điển liệt kê đủ bộ liên kết mặt bên tế bào biểu mô theo thứ tự từ cực ngọn xuống cực đáy (cùng với chất gắn CAM trong khoảng gian bào hẹp)."
  }
];
