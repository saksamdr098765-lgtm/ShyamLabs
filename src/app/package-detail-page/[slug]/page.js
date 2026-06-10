

import { notFound } from "next/navigation";
import PackageDetailPage from "./packagedetailpageClient";
import packagesData from "@/app/packagesData";


export default async function Page({ params }) {
 const {slug}=await params;
  const packageData = packagesData.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageData) {
  
    notFound();
  }

  return <PackageDetailPage packageData={packageData}></PackageDetailPage>
}