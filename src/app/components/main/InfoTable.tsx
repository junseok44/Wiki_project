import { cn } from "@/app/lib/utils";
import React from "react";

const RowTitle = ({
  children,
  colSpan,
  fullWidth,
  noCenterAlign,
}: {
  children: React.ReactNode;
  colSpan?: number;
  fullWidth?: boolean;
  noCenterAlign?: boolean;
}) => {
  return (
    <td
      className={cn(
        "bg-white text-black font-bold border-table_border_color border-0.5 text-sm border-collapse",
        fullWidth ? "" : "w-1/5",
        noCenterAlign ? "" : "text-center align-middle",
        "px-[10px] py-[5px]"
      )}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};

const RowContent = ({
  children,
  colSpan,
}: {
  children: React.ReactNode;
  colSpan?: number;
}) => {
  return (
    <td className="font-bold text-white text-sm">
      <div className="py-1 px-2 flex flex-col">{children}</div>
    </td>
  );
};

const InfoTable = () => {
  return (
    <table className="w-full">
      <tbody className="indent-none">
        <tr>
          <RowTitle colSpan={2} fullWidth noCenterAlign>
            <div className="flex flex-col items-center text-lg">
              <span>스핏츠</span>
              <span>スピッツ</span>
            </div>
          </RowTitle>
        </tr>
        <tr>
          <td colSpan={2} className="p-0">
            <img
              src="https://i.namu.wiki/i/ayMFppouOLzYE8B5ut1Aswa-vHCu2Iu9zGqkFTOygB6lmpZsMkvqhiTj2oRb4E1qjFkOxKW2C4jJWzUxL4ymEobFkHfYP3u4N-1JQ59_LEL3fqx6-r_U_ONILW-rSVAWQ-cWYZhFF3fGQ2wq8kF4Eg.webp"
              alt="스핏츠"
              className="w-full"
            />
          </td>
        </tr>
        <tr>
          <RowTitle colSpan={2}>
            왼쪽부터 미와 테츠야, 쿠사노 마사무네, 사키야마 타츠오, 타무라
            아키히로
          </RowTitle>
        </tr>
        <tr>
          <RowTitle>그룹 이름</RowTitle>
          <RowContent>
            <span>스핏츠</span>
            <span>スピッツ</span>
          </RowContent>
        </tr>
        <tr>
          <RowTitle>그룹 이름</RowTitle>
          <RowContent>스핏츠</RowContent>
        </tr>
        <tr>
          <RowTitle>그룹 이름</RowTitle>
          <RowContent>스핏츠</RowContent>
        </tr>
        <tr>
          <RowTitle>그룹 이름</RowTitle>
          <RowContent>스핏츠</RowContent>
        </tr>{" "}
        <tr>
          <RowTitle>그룹 이름</RowTitle>
          <RowContent>스핏츠</RowContent>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoTable;
