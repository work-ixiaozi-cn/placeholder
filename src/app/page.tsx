"use client"
import {Button, Layout, Menu} from "antd";
import Link from "next/link";
import {FileImageOutlined, MailOutlined} from "@ant-design/icons";
import ReactFullpage from "@fullpage/react-fullpage";

const items = [
  {
    label: <Link href='#picture'>图片</Link>,
    key: 'picture',
  },
  {
    label: <Link href='#words'>文字</Link>,
    key: 'words',
  },
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
]

const pictureSection = (
  <div className="section bg-yellow-300">
    <p>Section 1</p>
  </div>
)
let a = (
  <header className='container m-auto fixed top-0 left-0 right-0 z-999 flex' style={{zIndex: 999}}>
    <Link href='/' className='self-center'>从前有个山</Link>
    <Menu className='flex-auto' mode="horizontal" items={items} />
  </header>
)

const fullpages = [
  {
    text: "Section 1"
  },
  {
    text: "Section 2"
  },
  {
    text: "Section 3"
  }
]

export default function Home() {
  return (
    <>
        <header className='fixed top-0 w-screen bg-gray-50' style={{zIndex: 999}}>
          <div className='container m-auto flex bg-white'>
            <Link href='/' className='self-center mx-5px'>从前有个山</Link>
            <Menu className='flex-auto' mode="horizontal" items={items} />
          </div>
        </header>
        <ReactFullpage
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          navigation
          anchors={["firstPage", "words", "thirdPage"]}
          render={({state, fullpageApi}) => (
            <ReactFullpage.Wrapper>

              <div className="section bg-red-100">
                <p>Section 1</p>
              </div>
              <div className="section bg-red-200">
                <p>Section 2</p>
              </div>
              <div className="section bg-gray-100">
                <p>Section 3</p>
              </div>
              <div className="section">
                <p>Section 4</p>
              </div>
              <div className="section">
                <p>Section 5</p>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
    </>
  )
}
