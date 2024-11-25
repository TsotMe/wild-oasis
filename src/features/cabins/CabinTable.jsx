import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { useCabin } from "./useCabin";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, cabins } = useCabin();
  const [searchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  }
  if (filterValue === "no-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  }

  // sort
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");

  const sortedCabins = filteredCabins?.sort((a, b) => {
    if (direction === "asc") return a[field] - b[field];
    else return b[field] - a[field];
  });

  console.log(sortedCabins);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
