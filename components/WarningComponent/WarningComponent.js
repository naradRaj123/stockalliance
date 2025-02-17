"use client";
const WarningComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-6 flex items-center space-x-4">
      {/* Left vertical line */}
      <div className="w-1 bg-white h-full"></div>

      {/* Warning text and description */}
      <div>
        <h2 className="font-bold text-xl mb-2">Warning</h2>
        <p className="text-base">
          Investment in securities market are subject to market risks. Read all
          the related documents carefully. <br />
          Before investing, kindly do not make any payment in a savings account
          or personal UPI. If you are making any payment, please pay only in
          our company bank account or company UPI address. We are not
          responsible for any fraudulent transactions if you make payment in a
          personal account.
        </p>
      </div>
    </div>
  );
};

export default WarningComponent;
