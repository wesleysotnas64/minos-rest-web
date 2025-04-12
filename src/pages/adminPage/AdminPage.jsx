import ContentButton from "../../components/contentButton/ContentButton";
import HeaderBreadcrumb from "../../components/headerBreadcrumb/HeaderBreadcrumb"
import SideBar from "../../components/sideBar/SideBar"
import { ContentArea, PageContainer, SideBarArea } from "./AdminPage.style"

function AdminPage() {
  const breadcrumbTrail = [
    { label: "Gerenciar", link: "/gerenciar" },
  ];

  return (
    <>
      <PageContainer>
          <SideBarArea>
              <SideBar />
          </SideBarArea>

          <ContentArea>
              <HeaderBreadcrumb trail={breadcrumbTrail}/>

              <ContentButton title={"Controle"}/>
          </ContentArea>
      </PageContainer>
    </>
  )
}
  
export default AdminPage
  