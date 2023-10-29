import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TablePagination, TableRow } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../shared/components/ColorfulChip";
import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";

const styles = theme => ({
  tableWrapper: {
    overflowX: "auto",
    width: "100%"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    },
    width: "100%"
  },
  dBlock: {
    display: "block !important"
  },
  dNone: {
    display: "none !important"
  },
  firstData: {
    paddingLeft: theme.spacing(3)
  }
});

const rows = [
  {
    id: "clientName",
    numeric: false,
    label: "Client Name"
  },
  // {
  //   id: "clientId",
  //   numeric: false,
  //   label: "Client ID"
  // },
  {
    id: "date",
    numeric: false,
    label: "Last modified"
  },
  {
    id: "status",
    numeric: false,
    label: "Status"
  }
];

const rowsPerPage = 25;

function SubscriptionTable(props) {
  const { transactions, theme, classes } = props;
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback(
    (_, page) => {
      setPage(page);
    },
    [setPage]
  );

  if (transactions.length > 0) {
    return (
      <div className={classes.tableWrapper}>
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={transactions.length} rows={rows} />
          <TableBody>
            {transactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.firstData}
                  >
                    {transaction.clientName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {unixToDateString(transaction.timestamp)}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {transaction.caseStatus === "Completed" ? (
                      <ColorfulChip
                        label={transaction.caseStatus}
                        color={theme.palette.secondary.main}
                      />
                    ) : (
                      <ColorfulChip
                        label={transaction.caseStatus}
                        color={theme.palette.error.dark}
                      />
                    )}
                  </TableCell>                  
                  {/* <TableCell component="th" scope="row">
                    {transaction.paidUntil
                      ? unixToDateString(transaction.paidUntil)
                      : ""}
                  </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onPageChange={handleChangePage}
          classes={{
            select: classes.dNone,
            selectIcon: classes.dNone,
            actions: transactions.length > 0 ? classes.dBlock : classes.dNone,
            caption: transactions.length > 0 ? classes.dBlock : classes.dNone
          }}
          labelRowsPerPage=""
        />
      </div>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No transactions received yet.
      </HighlightedInformation>
    </div>
  );
}

SubscriptionTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(SubscriptionTable);
