$(document).ready(function () {
  // Button click event handlers
  $("#createAccountBtn").click(function () {
    // Handle create account functionality
    // Redirect or display relevant content
    window.location.href = "./createaccount.html";
  });

  $("#viewAllAccountsBtn").click(function () {
    // Handle view all accounts functionality
    // Redirect or display relevant content
    window.location.href = "./viewaccounts.html";
  });

  $("#aboutBtn").click(function () {
    // Handle view account by ID functionality
    // Redirect or display relevant content
    window.location.href = "./dashboard.html";
  });

  $("#deleteAccountByIdBtn").click(function () {
    // Handle delete account by ID functionality
    // Redirect or display relevant content
    window.location.href = "./deleteaccount.html";
  });

  $("#logoutBtn").click(function () {
    // Handle logout functionality
    // Redirect to logout endpoint or perform logout actions
    window.location.href = "../../index.html";
  });

  $(document).ready(function () {
    // Function to display account details
    function displayAccountDetails(account) {
      $("#accountDetailsContent").html(
        "<p>ID: " +
          account.id +
          "</p>" +
          "<p>Name: " +
          account.accountHolderName +
          "</p>" +
          "<p>Phone No: " +
          account.phoneNo +
          "</p>" +
          "<p>DOB: " +
          account.dob +
          "</p>" +
          "<p>Account Type: " +
          account.accountType +
          "</p>" +
          "<p>Aadhar No: " +
          account.aadharNo +
          "</p>" +
          "<p>Pincode: " +
          account.pincode +
          "</p>" +
          "<p>State: " +
          account.state +
          "</p>" +
          "<p>City: " +
          account.city +
          "</p>" +
          "<p>Locality: " +
          account.locality +
          "</p>" +
          "<p>Balance: " +
          account.balance +
          "</p>"
      );
      $("#accountDetails").css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      });
      $("#accountDetails").show();
    }

    // Function to fetch account details by ID
    function getAccountDetailsById(accountId) {
      $.ajax({
        url: "http://localhost:8080/api/accounts/" + accountId,
        method: "GET",
        success: function (response) {
          displayAccountDetails(response);
        },
        error: function (error) {
          console.error("Error fetching account by ID:", error);
        },
      });
    }

    // Function to delete account by ID
    function deleteAccountById(accountId) {
      $.ajax({
        url: "http://localhost:8080/api/accounts/" + accountId,
        method: "DELETE",
        success: function (response) {
          console.log("Account deleted successfully:", response);
          window.location.href = "./deleteaccount.html";
          // Optionally, you can redirect the user or perform any other action after deletion
        },
        error: function (error) {
          console.error("Error deleting account:", error);
          // Optionally, you can display an error message to the user
        },
      });
    }

    // Button click event to get account details
    $("#getAccountDetailsBtn").click(function () {
      var accountId = $("#accountIdInput").val();
      if (accountId.trim() !== "") {
        getAccountDetailsById(accountId);
      }
    });

    // Button click event to confirm deletion
    $("#confirmDeleteBtn").click(function () {
      var accountId = $("#accountIdInput").val();
      if (accountId.trim() !== "") {
        $("#confirmationPopup").show();
      }
    });

    // Button click event to confirm deletion
    $("#confirmBtn").click(function () {
      var accountId = $("#accountIdInput").val();
      if (accountId.trim() !== "") {
        deleteAccountById(accountId);
        $("#confirmationPopup").hide();
      }
    });

    // Button click event to cancel deletion
    $("#cancelBtn").click(function () {
      $("#confirmationPopup").hide();
    });
  });
});
