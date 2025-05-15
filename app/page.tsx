import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
export default function IndexPage() {
  return (
    <div>
      <MenuBar page={"หน้าแรก"}/>

      {/*section 1*/}
      <div>
        <div>
          <div className="alert alert-warning rounded" role="alert">
            <p className="h1 text-center kanit-bold">เว็ปไซต์นี้เป็นเพียงตัวอย่างการทำโปรไฟล์ส่วนตัว</p>
          </div>
        </div>
        <div className="section1-box">
          <h1 className="section1-name kanit-semibold">Hey I'm Phurin</h1>
          <p className="section1-meta-data">I'm a student at rahamangla university of technology Krungthep <br />
            i am ศึกษา in the คณะบริหารธุรกิจ สาขานวัตกรรมระบบสารสนเทศน์ </p>
          <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/488906647_3129530830547078_4600288233173795265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGZCHBXtbRy6se3vNJ3ff1wJjMTpTdFTu8mMxOlN0VO7-QIMx3lVm0gDsRE7WPyXmoWSi4dEkhdsX9E7FbBYrW8&_nc_ohc=gVXv2pmlcoIQ7kNvwH_M4G6&_nc_oc=AdnjaXRA4WvX5wgQnWhNaW1njikqYueMOfOV3m-DqkD3rFJvLIn1GnGkgSwnky-0JhY&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=SLfX-8oICmpUNNO_SQZeYQ&oh=00_AfHB6q9XpTC38FU5nlpc4EYC9OptM985tgvwvLF7ObgV3A&oe=681A1177" alt="My Picture" classname="section1-profile-picture " />
          <p className="section1-description kanit-light">ฉันกำลังเรียนเขียนเว็ปฉันกำลังเรียนเขียนเว็ปไซต์ vscode</p>
        </div>
        <div className="section2-box">
          <a className="section2-contact-link kanit-semibold" href="https://www.facebook.com/klarock.phurin">Facebook</a>
          <br />
          <a className="section2-contact-link kanit-semibold" href="https://github.com/">github</a>
          <br />
        </div>
        <div className="section3-box">
          <br />
          <div className="section3-box-a">
            <h1>ประวัติการศึกษา</h1>
            <p>ประถมศึกษา: โรงเรียนขจรโรจน์วิทยา</p>
            <p>มัธยมศึกษา: โรงเรียนขจรโรจน์วิทยา</p>
            <p>ปวช.-ปวส.: วิทยาลัยพณิชยการเชตุพน</p>
          </div>
          <div className="section3-box-b">
            <h1>ประสบการณ์ฝึกงาน</h1>
            <p>สำนักงานเขตทุ่งครุ</p>
            <p>การไฟฟ้านครหลวง</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}