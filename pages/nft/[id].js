import { ThirdwebNftMedia, useContract, useContractEvents, useNFT } from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../../const/addresses";
import {useRouter, router} from 'next/router'
import style from '../../styles/Home.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NFTDetailPage = ()=>{
    const {id} = useRouter().query;
    const {contract} = useContract(NFT_CONTRACT_ADDRESS);
    const {data: nft, isLoading: isLoadingNFT}=useNFT(contract,id);
    const { data: events, isLoading: isLoadingEvents}= useContractEvents(
        contract,
        'Transfer',
        {
          queryFilter:{
            filters:{
                tokenId: id,
            },
            order:"desc",

          }  
        }
    )
    return(
  <div className={style.contaner}>
  <h3 className={style.dheading} >NFT Detail Page</h3>
  <div className={style.mname}>
  <h1  >{nft?.metadata.name}</h1>
  </div>
  <div className={style.contanertwo}>
 
 <div className={style.dimage}>
 <div className={style.dmimage}>
  {
    !isLoadingNFT &&(
       <ThirdwebNftMedia
        metadata={nft.metadata}
        width="400px"
        height="400px"
       /> 
    )
  }
  </div>
 
  </div>
  <br />
  <div>
  
    <div className={style.dData}>
    <div className={style.mdData}>
    {nft?.metadata.attributes.map((attribute, index)=>(
        <div key={index}>
            <strong>{attribute.trait_type}</strong>: {attribute.value}
        </div>
    ))}
    </div>
    </div>
  </div>
  </div>
 <div>
 
    <h3 className={style.traits}>History</h3>
    <div className={style.history}>
    <div className={style.transaction}>
    {!isLoadingEvents && (
        <div>
        { events.map((event,index)=>(
            <div key={index}>
            <strong>From:</strong> {event.data.from} <strong>To:</strong>{event.data.to}
                </div>
         )) }
        </div>   
    )}
    </div>
    </div>
 </div>
 <br /><br /><br /><br />
<div className={style.back}>
 <ArrowBackIcon onClick={()=> router.back()}/>
 </div>
  </div>
    )

};


export default NFTDetailPage;