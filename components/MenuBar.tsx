import Link from "next/link";
type MenuBarProps = {
    page: string;
  };
export default function MenuBar(props: MenuBarProps) {
    console.log("props", props);
    return (
        <div>
            <Link href='/' className="menu-item kanit-semibold">หน้าหลัก</Link>
            <Link href="about-me.html" className="menu-item kanit-semibold" >เกี่ยวกับฉัน</Link>
            <Link href="portfolio.html"className="menu-item kanit-semibold" >ผลงาน</Link>
            <Link href="/state" className="menu-item kanit-semibold">State</Link>
            <Link href="/props" className="menu-item kanit-semibold">เรียนรู้ Props</Link>
            <Link href="/use-effect" className="menu-item kanit-semibold">เรียนรู้ useEffect</Link>
        </div>
        );




}