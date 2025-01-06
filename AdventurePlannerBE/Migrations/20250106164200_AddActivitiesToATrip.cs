using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdventurePlannerBE.Migrations
{
    /// <inheritdoc />
    public partial class AddActivitiesToATrip : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "TripId",
                table: "Activities",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Activities_TripId",
                table: "Activities",
                column: "TripId");

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Trips_TripId",
                table: "Activities",
                column: "TripId",
                principalTable: "Trips",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Trips_TripId",
                table: "Activities");

            migrationBuilder.DropIndex(
                name: "IX_Activities_TripId",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "TripId",
                table: "Activities");
        }
    }
}
