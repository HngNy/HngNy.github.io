import { resumeConfig } from "@/config/resume.config";

// Nội dung trang /cv (bản tiếng Việt)
export const resumeConfigVi: typeof resumeConfig = {
  name: "Cao Vũ Hằng Ny",
  title: "Vận hành sàn TMĐT · Digital Marketing",
  summary:
    "Sinh viên ngành Hệ thống thông tin quản lý, có kinh nghiệm vận hành gian hàng TikTok Shop, Shopee và bán hàng trực tiếp (đạt 130% chỉ tiêu doanh số). Ngắn hạn, mình muốn vận dụng kiến thức nền tảng về Meta Ads và thương mại điện tử để hỗ trợ triển khai, theo dõi và đánh giá hiệu quả quảng cáo trên Facebook; dài hạn, mình hướng tới trở thành chuyên viên Digital Marketing có khả năng xây dựng, tối ưu chiến dịch và đề xuất giải pháp tăng trưởng doanh thu.",
  contacts: [
    { icon: "address", value: "Tân Phú, TP. Hồ Chí Minh" },
    { icon: "mail", value: "Hangny479@gmail.com", href: "mailto:Hangny479@gmail.com" },
  ],
  links: [
    { icon: "github", label: "GitHub", value: "github.com/HngNy", href: "https://github.com/HngNy" },
  ],
  work: [
    {
      company: "Công ty TNHH TVT BPO",
      role: "Thực tập sinh Vận hành sàn TMĐT",
      stack: "",
      period: "06/2026 – 09/2026",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Hỗ trợ vận hành gian hàng TikTok Shop và Shopee: đăng sản phẩm, cập nhật thông tin, hình ảnh, giá bán.",
        "Tư vấn cho khách hàng, nhận phản hồi và đưa ra giải pháp chăm sóc khách hàng.",
        "Theo dõi đơn hàng, xử lý tình trạng tồn kho, phối hợp với kho xử lý khiếu nại / hoàn trả.",
        "Xử lý dữ liệu mã sản phẩm, giá bán, tồn kho, trạng thái đơn hàng trên Google Sheets.",
        "Tính giá bán cạnh tranh: tổng hợp giá vốn, phí sàn (phí cố định, phí xử lý giao dịch, Voucher Xtra…) và giá đối thủ để đề xuất mức giá vẫn đảm bảo lợi nhuận.",
        "Tạo chiến dịch quảng cáo trên sàn: chọn sản phẩm, từ khóa, ngân sách và giá thầu.",
        "Đọc các chỉ số quảng cáo cơ bản (CTR, CPC, tỷ lệ chuyển đổi, ROAS, ACOS) để theo dõi hiệu quả chiến dịch.",
      ],
      selected: [],
    },
    {
      company: "Công ty TNHH Kash Việt Nam",
      role: "Nhân viên kinh doanh",
      stack: "",
      period: "10/2023 – 02/2025",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Tư vấn và cung cấp thông tin sản phẩm, hỗ trợ khách hàng lựa chọn, nâng cao tỷ lệ mua hàng.",
        "Chăm sóc khách hàng, giải đáp thắc mắc, xử lý khiếu nại và đảm bảo trải nghiệm mua sắm tốt nhất.",
        "Theo dõi hàng hóa, phối hợp với các đối tác phân phối để đảm bảo nguồn cung ổn định.",
        "Kiểm soát tồn kho và lên kế hoạch đặt hàng, đảm bảo nguồn cung cho các điểm bán.",
        "Kết quả: đạt hơn 90% chỉ tiêu doanh số mỗi tháng; tháng 1/2025 đạt 130% chỉ tiêu.",
      ],
      selected: [],
    },
  ],
  projects: [],
  skills: [
    { group: "Vận hành sàn", items: "TikTok Shop, Shopee, đăng sản phẩm, tính giá bán cạnh tranh, quản lý tồn kho, xử lý đơn & hoàn trả" },
    { group: "Marketing", items: "Tạo chiến dịch quảng cáo trên sàn, đọc chỉ số ads cơ bản (CTR, CPC, ROAS, ACOS), Meta Ads (nền tảng), Facebook" },
    { group: "Dữ liệu", items: "Google Sheets, tin học văn phòng, theo dõi số liệu bán hàng" },
    { group: "Kỹ năng mềm", items: "Giao tiếp, lắng nghe, chăm sóc khách hàng, làm việc nhóm, quản lý thời gian" },
  ],
  education: [
    { school: "Trường Đại học Ngân hàng TP. Hồ Chí Minh", degree: "Ngành Hệ thống thông tin quản lý, GPA 3.2/4.0", period: "2022 – 2026" },
  ],
  languages: ["Tiếng Việt (bản ngữ)", "Tiếng Trung (HSK 2)"],
};
