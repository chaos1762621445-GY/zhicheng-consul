import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "志成コンサル | 在日华人补助金申请代办";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 品牌化 OG 卡片（深 teal + 金线 + 衬线标题）—— 用于社交分享 / AI 引擎卡片
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #0d3331 0%, #114240 55%, #0f3937 100%)",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* 右上金色光晕 */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,162,58,0.28) 0%, rgba(196,162,58,0) 70%)",
            display: "flex",
          }}
        />
        {/* 顶部品牌小字 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            color: "#c4a23a",
            letterSpacing: 6,
            marginBottom: 28,
          }}
        >
          株式会社 志成コンサル · SHISEI CONSULT
        </div>
        {/* 金色短线 */}
        <div
          style={{
            width: 120,
            height: 5,
            background: "#c4a23a",
            marginBottom: 36,
            display: "flex",
          }}
        />
        {/* 主标题 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.25,
          }}
        >
          <span style={{ display: "flex" }}>在日华人补助金</span>
          <span style={{ display: "flex" }}>
            全程<span style={{ color: "#d9b84a" }}>中文代办</span>
          </span>
        </div>
        {/* 副标题 */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "rgba(255,255,255,0.82)",
            marginTop: 34,
            letterSpacing: 2,
          }}
        >
          行政书士 · 税理士 · 社劳士 · 诊断士联合团队　·　不获批不收费
        </div>
        {/* 底部金线 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: "#c4a23a",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
