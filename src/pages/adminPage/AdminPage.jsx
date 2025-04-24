import ContentButton from "../../components/contentButton/ContentButton";
import HeaderBreadcrumb from "../../components/headerBreadcrumb/HeaderBreadcrumb"
import SideBar from "../../components/sideBar/SideBar"
import { ContentArea, PageContainer, SideBarArea, GridButtons } from "./AdminPage.style"

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

              <GridButtons>
                <ContentButton title={"Níveis de Acesso"}/>
                <ContentButton title={"Usuários"}/>
                <ContentButton title={"Estoque"}/>
                <ContentButton title={"Em breve..."}/>
              </GridButtons>
          </ContentArea>
      </PageContainer>
    </>
  )
}
  
export default AdminPage
  