import OverviewMember from "../../components/organisms/OverviewMember";
import Sidebar from "../../components/organisms/Sidebar";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar />
        <OverviewMember />
      </section>
    </>
  );
}
