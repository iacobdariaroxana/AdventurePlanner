using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdventurePlannerBE.Migrations
{
    /// <inheritdoc />
    public partial class AddFieldsToActivityTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Activities",
                newName: "RatingCounts");

            migrationBuilder.AddColumn<bool>(
                name: "GoodForChildren",
                table: "Activities",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "PriceLevel",
                table: "Activities",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<float>(
                name: "Rating",
                table: "Activities",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "WebsiteUri",
                table: "Activities",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GoodForChildren",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "PriceLevel",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "WebsiteUri",
                table: "Activities");

            migrationBuilder.RenameColumn(
                name: "RatingCounts",
                table: "Activities",
                newName: "Price");
        }
    }
}
