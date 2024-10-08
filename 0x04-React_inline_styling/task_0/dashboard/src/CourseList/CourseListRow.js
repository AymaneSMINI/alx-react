import PropTypes from "props-types";
import { StyleSheet, css } from "aphrodite";
import React, { CourseList } from 'react';
const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const headerStyle = { backgroundColor: "#f5f5f5ab" };
  const rowStyle = { backgroundColor: "#deb5b545" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;
  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(listRowStyles.thcenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(listRowStyles.th)}>{textFirstCell}</th>
            <th className={css(listRowStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(listRowStyles.td)}>{textFirstCell}</td>
          <td className={css(listRowStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const listRowStyles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
});

CourseList.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CourseList.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
