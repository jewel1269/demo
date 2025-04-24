import { FaFileInvoiceDollar, FaCalendarAlt, FaUsers } from "react-icons/fa";

const CloudFeatures = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar className="text-white text-2xl" />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: <FaCalendarAlt className="text-white text-2xl " />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    },
  ];

  return (
   <div className="flex justify-center">
     <section className="py-16 container px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-3">
        All-In-One{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          Cloud Software.
        </span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center"
          >
            <div className="bg-blue-500 p-3 rounded-full -mt-12 mb-4 shadow-md">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};

export default CloudFeatures;
