import Link from "next/link";
type MenuBarProps = {
    page: string;
  };
export default function MenuBar(props: MenuBarProps) {
    console.log("props", props);
    return (
        <div>
            <div className="menu-selection">
                <Link href='/' className="menu-item kanit-semibold">หน้าหลัก</Link>
            {/* <Link href="about-me.html" className="menu-item kanit-semibold" >เกี่ยวกับฉัน</Link>
            <Link href="portfolio.html"className="menu-item kanit-semibold" >ผลงาน</Link> */}
            <Link href="/state" className="menu-item kanit-semibold">State</Link>
            <Link href="/props" className="menu-item kanit-semibold">เรียนรู้ Props</Link>
            <Link href="/use-effect" className="menu-item kanit-semibold">เรียนรู้ useEffect</Link>
            </div>
            <div className="p-4 bg-green-800">
            <p className="text-2xl kanit-medium text-center text-white">ตอนนี้คุณอยู่ที่หน้า {props.page}</p>
      
            </div>
        </div>
        );




}