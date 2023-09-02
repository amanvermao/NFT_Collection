import { useState } from "react";
import { NFTCard } from "../Components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";
import { useContract, useNFT, useNFTs} from "@thirdweb-dev/react";
import Header from "../Components/Header";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Home() {
  const count =32;
   const [page, setPage]=useState(1);
  const {contract} = useContract(NFT_CONTRACT_ADDRESS);
   const{ data: nfts,isLoading: isLoadingNFTs}=useNFTs(
    contract,{
      count:count,
      start:(page -1) * count,
    }
  
   )
  return (
   
      <div className={styles.container}>
       
<Header/>
      <div className={styles.NFTGrid}>
       {
        !isLoadingNFTs &&(
          nfts.map((nft,index)=>(
            <NFTCard key={index} nft={nft} />
          ))
        )
       }
       </div>
       <div className={styles.pagnation}>
       <ArrowBackIosNewIcon onClick={()=> setPage(page-1)} disabled={page === 1} />
       <input type="number" value={page} onChange={(e)=> setPage(parseInt(e.target.value))} className={styles.input}/>
       <ArrowForwardIosIcon onClick={()=> setPage(page+1)}/>
       </div>
      </div>
   
  );
}
