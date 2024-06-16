import ChannelWrapper from "@/components/ChannelWrapper";
import ChatContent from "@/components/ChatContent";
import ChatList from "@/components/ChatList";
import SideBar from "@/components/SideBar";
import { faker } from '@faker-js/faker';

export default function Home() {
  faker.seed(123);




  return (

    <div className="flex h-screen">
      {/* Contacts */}
      <div className="w-[23%] h-screen">
        <ChatList />
      </div>


      {/* Chat Screen */}
      <div className="flex-1">


        <ChannelWrapper >
          <ChatContent />
        </ChannelWrapper>

      </div>


      {/* Contact Info */}
      <ChannelWrapper>
        <SideBar />
      </ChannelWrapper>


    </div>

  );
}
