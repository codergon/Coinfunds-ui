import FeaturesCard from "@/components/Feature";
import Illustrations from "@/components/illustrations";

function Features() {
  return (
    <div className="features">
      <div className="features__content">
        {[
          {
            title: "Plant Your Vision",
            subtitle:
              "Nurture Your Project with a Powerful Crowdfunding Platform",
            illustration: <Illustrations.CardPlant />,
          },
          {
            title: "Transparent Imapct Tracking",
            subtitle:
              "Monitor the progress of your campaigns and funding in real-time.",
            illustration: <Illustrations.CashDelivery />,
          },
          {
            title: "Global Community",
            subtitle:
              "Connect with a diverse network of individuals passionate about making a difference.",
            illustration: <Illustrations.Support />,
          },

          // {
          //   title: "Easy Campaign Creation",
          //   subtitle:
          //     "Bring your ideas to life with our intuitive campaign creation process.",
          //   illustration: <Illustrations.Support />,
          // },
          // {
          //   title: "Secure Funding",
          //   subtitle:
          //     "Access funds through our secure platform powered by Circle USDC.",
          // },
          // {
          //   title: "Transparent Imapct Tracking",
          //   subtitle:
          //     "Monitor the progress of your campaigns and funding in real-time.",
          // },
          // {
          //   title: "Impactful Results",
          //   subtitle:
          //     "Witness the tangible impact of your campaigns and contributions.",
          //   illustration: <Illustrations.CoinPlant />,
          // },
        ].map((item, index) => {
          return <FeaturesCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Features;
